import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import nftimg from "../../img/nft.png"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>NFT FireWallet</h1>
			<p>
				<img src={nftimg} style={{width:"20%", height:"20%"}} />
			</p>
			<div className="alert alert-info">
			Sign Up to access your NFTs
			</div>
		</div>
	);
};
