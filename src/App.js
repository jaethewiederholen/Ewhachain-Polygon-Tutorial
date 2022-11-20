import logo from './logo.svg';
import './App.css';
import airdropToken from "./abi/AirdropToken.json";
const { ethers } = require("ethers");

const register = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const adtContract = new ethers.Contract('0x997FCA813Efa7e8A61787eC67117F513bD7007B3', airdropToken.abi, provider);
  try {
    const tx = await adtContract.connect(signer).registerAsWhitelist({ value: ethers.utils.parseEther("0.01") });
    const recipt = await tx.wait();
    if (recipt.status) {
      alert("tx success!")
    }
  }
  catch (err) {
    let error = JSON.parse(JSON.stringify(err));
    alert(error.error.data.message)
  };
}

const claim = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const adtContract = new ethers.Contract('0x997FCA813Efa7e8A61787eC67117F513bD7007B3', airdropToken.abi, provider);
  try {
    const tx = await adtContract.connect(signer).claim();
    const recipt = await tx.wait();
    if (recipt.status) {
      alert("tx success!")
    }
  }
  catch (err) {
    let error = JSON.parse(JSON.stringify(err));
    alert(error.error.data.message)
  };
}

function App() {
  return (
    <div className="App">
      <button className="RegisterBtn" onClick={register}>Register As Whitelist</button>
      <button className="ClaimBtn" onClick={claim}>Claim Airdrop Token</button>
    </div>
  );
}

export default App;
