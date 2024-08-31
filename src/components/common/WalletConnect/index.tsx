import { useState } from "react";
import sdk from "@crossmarkio/sdk";
import { useAddressStore } from "@/store";
import styled from "styled-components";
import { toast } from "react-toastify";

interface WalletConnectProps {
  onConnectionChange: (connected: boolean) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  onConnectionChange,
}) => {
  const notify = () =>
    toast(
      <>
        CrossMask에서 지갑이 없습니다.
        <br />
        지갑 생성 여부를 확인해주세요.
      </>
    );
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const { address, setAddress } = useAddressStore() as any;

  const checkWalletInstallation = () => {
    const installed = sdk.sync.isInstalled();
    setIsInstalled(installed ?? false);
    return installed;
  };

  const handleClick = () => {
    if (isInstalled === null) {
      const installed = checkWalletInstallation();
      if (installed) {
        connectWallet();
      }
    } else if (isInstalled === false) {
      window.open(
        "https://chromewebstore.google.com/detail/crossmark-wallet/canipghmckojpianfgiklhbgpfmhjkjg",
        "_blank"
      );
    } else {
      connectWallet();
    }
  };

  const connectWallet = async () => {
    try {
      const response = await sdk.async.signInAndWait();
      if (response.response.data.address) {
        setIsConnected(true);
        onConnectionChange(true);
        setAddress(response.response.data.address);
      } else {
        setIsConnected(false);
        onConnectionChange(false);
        notify();
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsConnected(false);
      onConnectionChange(false);
    }
  };

  const getButtonText = () => {
    if (isInstalled === false) return "지갑 설치 먼저 진행해주세요";
    if (isConnected === true) return "지갑 연결이 완료되었습니다.";
    return "지갑을 연결해주세요.";
  };

  function shortenAddress(address: string, chars = 6) {
    if (!address) return "";
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  }

  return (
    <Container>
      {address ? (
        <>주소: {shortenAddress(address)}</>
      ) : (
        <button onClick={handleClick} disabled={isConnected === true}>
          {getButtonText()}
        </button>
      )}
    </Container>
  );
};

const Container = styled.div`
  button {
    border: none;
    border-radius: 10px;
    background: var(--Primary-color, #007bff);

    color: #fff;

    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    padding: 10px 27px;
  }
`;

export default WalletConnect;
