import { useState } from "react";
import SwapInputTab from "components/SwapInputTab"
import { styled } from "styled-components"
import TokenModal from "components/TokenModal";
import Backdrop from "components/Backdrop";
import { chainIds } from "configs/services/chainIds";
import { useAccount, useNetwork, useSwitchNetwork, useBalance, useContractWrite, useWaitForTransaction, useContractRead } from "wagmi";
import { MAP_STR_ABI } from "configs/abis";
import { wld_addresses } from "configs/contract_addresses";
import { to_wei } from "utils/util";

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

    const { data: allowance, isError, isLoading } = useContractRead({
        // chainId: chain?.id,
        // address: wld_addresses["token_contract"],
        // abi: MAP_STR_ABI["ERC20_ABI"],
        // functionName: 'allowance',
        // args: [
        //   address,
        //   wld_addresses["bridge_contract"],
        // ],
    })

    const { write } = useContractWrite({
        chainId: chain?.id,
        address: wld_addresses["wrappedETH_address_BRIDGE"],
        abi: MAP_STR_ABI["WRAPETH"],
        functionName: 'burn',
        onMutate({ args }) {
            if (!isConnected) {
                // handleOpenNotification({
                //     status: "Please connect your wallet!",
                // });
                return;
            }
            if (chain?.id !== chainIds["worldland"]) {
                switchNetwork?.(chainIds["worldland"])
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


    return (
        <Container>
            <SwapInputTab open={setModal} input="0" />
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


