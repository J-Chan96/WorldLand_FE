import EccpowImage from 'assets/learn/post/eccpow/eccpow.png';

const ECCPoW = () => {
  return (
    <>
      <h1>Time-Variant Puzzles in ECCPOW: Suppressing ASIC and Quantum Threats</h1>
      <img src={EccpowImage} alt="EccpowImage" />
      <p>
        Worldland is a blockchain network that adopts an ECCPOW (Error Correction Code based Proof of Work) consensus
        algorithm based on POW (Proof of Work). ECCPOW signifies a mining process that employs Low Density Parity Check
        (LDPC), one of the Error Correction Codes. In ECCPOW, puzzles can be deliberately generated to vary from block
        to block, thus facilitating a time-variant puzzle generation mechanism. This mechanism is beneficial in
        suppressing the emergence of ASIC mining devices.
      </p>
    </>
  );
};

export default ECCPoW;
