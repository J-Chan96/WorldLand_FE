import { useState } from "react";
import SwapInputTab from "components/SwapInputTab"
import { styled } from "styled-components"
import TokenModal from "components/TokenModal";
import Backdrop from "components/Backdrop";
import { chainIds } from "configs/services/chainIds";
import { useAccount, useNetwork, useSwitchNetwork, useBalance, useContractWrite, useWaitForTransaction, useContractRead } from "wagmi";
import { MAP_STR_ABI } from "configs/abis";
import { WLD_ADDRESSES } from "configs/contract_addresses";
import { to_wei } from "utils/util";
import { ABI, CHAINDS, CONTRACT_ADDRESSES, FUNCTION, Field } from "../../utils/enum";


const Swap = () => {
    const [modal, setModal] = useState<boolean>(false);
    const { address, isConnected } = useAccount();
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [currentTxHash, setCurrentTxHash] = useState<`0x${string}` | undefined>();

    const { chain } = useNetwork()

    const { chains, switchNetwork } =
        useSwitchNetwork({
            onSuccess(data) {
                //
            },
        })


    const { data } = useWaitForTransaction({
        chainId: chain?.id,
        hash: currentTxHash,
        staleTime: 2_000,
        onSuccess() {
            //
        },
        onError(error: any) {
            //
        },
    })

    const { data: amountOut, isError, isLoading } = useContractRead({
        address: WLD_ADDRESSES[CONTRACT_ADDRESSES.UNISWAP][CONTRACT_ADDRESSES.ROUTER],
        abi: MAP_STR_ABI[ABI.UNISWAPV2_ROUTER],
        functionName: FUNCTION.GETAMOUNTSOUT,
        args: [
            input,
            [
                WLD_ADDRESSES[CONTRACT_ADDRESSES.WRAPPEDETH_ADDRESS],
                WLD_ADDRESSES[CONTRACT_ADDRESSES.LVT_ADDRESS],
            ]
        ],
        onSuccess(data) {
            console.log({ data })
        }
    })

    const { write } = useContractWrite({
        chainId: chain?.id,
        address: WLD_ADDRESSES[CONTRACT_ADDRESSES.WRAPPEDETH_ADDRESS_BRIDGE],
        abi: MAP_STR_ABI[ABI.WRAPETH],
        functionName: FUNCTION.BURN,
        onMutate({ args }) {
            if (!isConnected) {
                // handleOpenNotification({
                //     status: "Please connect your wallet!",
                // });
                return;
            }
            if (chain?.id !== chainIds[CHAINDS.WORLDLAND_SEOUL]) {
                switchNetwork?.(chainIds[CHAINDS.WORLDLAND_SEOUL])
            }

            if (input === "") {
                return;
            }

            //   setLoader(true);
            //   handleOpenNotification({
            //     status: "Sending transaction...",
            //   });
        },
        onSuccess({ hash }) {
            //   handleOpenNotification({
            //     status: "Awaiting the transaction...",
            //   });
            setCurrentTxHash(hash);
        },
        onError(error: any) {
            alert(error)
            console.log(error);
            //   handleOpenNotification({
            //     status: error?.shortMessage,
            //   });
        }
    })


    const sendTransaction = async () => {
        try {
            write({
                args: [to_wei(input)],
            })
        } catch (err) {
            console.log(err)
        }
    };


    function userInputHandler(field: Field, typedValue: string) {
        switch (field) {
            case Field.INPUT:
                setInput(typedValue);
                break;
            case Field.OUTPUT:
                setOutput(typedValue);
                break;
            default:
                break;
        }
    }


    return (
        <Container>
            <SwapInputTab open={setModal} inputHandler={userInputHandler} input={input} output={output} />
            {modal && <>
                <Backdrop close={setModal} />
                <TokenModal close={setModal} />
            </>}
        </Container>
    )
}

export default Swap

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background:linear-gradient(to bottom, #121423, #06080c);
    height: 100vh;
    position: relative;
`;


