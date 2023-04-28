import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";
import TopCreatorFeesPaid from "../util/topcreatorfeespaid";
import IntroSlider from "../components/slider/IntroSlider";
import TopHoldingPeriod from "../util/topholdingperiod";
import Multiselect from "multiselect-react-dropdown";
import Yugalabs from "../constants/yugalabscollections";
import Azuki from "../constants/azukicollections";
import Doodles from "../constants/doodlescollections";
import Memeland from "../constants/memelandcollections";
import Proof from "../constants/proofcollections";
import RTFKT from "../constants/rtfktcollections";
import { useState } from "react";
import Collection from "../constants/collection";
import TableHeaderProps from "../util/tableheaderprops";
import TableHeader from "../util/tableheader";
import ColumnDefinitionType from "../util/columndefinitiontype";
import { ChangeEventHandler } from "react";

const Index = () => {
	const defaultCollection = Memeland;

	const [collections, setCollections] = useState<Array<Collection>>(defaultCollection);
	const collectionNames = (collections: Array<Collection>) => collections.map((record) => ({header: record.collection}) as ColumnDefinitionType );

	const [tableHeaders, setTableHeaders] = useState<TableHeaderProps>({columns: collectionNames(collections)});

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		// Preventing the page from reloading
		event.preventDefault();
	
		// Do something 
		console.log("all collections:  " + collectionNames(collections).map(value => value.header));
		setTableHeaders({columns: collectionNames(collections)});
	}

	const select = (selectedList: Array<Collection>, selectedItem: Collection) => {
		console.log("select " + selectedList.map((record) => record.collection) + " item " + selectedItem.collection);
		setCollections(selectedList);
	}

	const remove = (selectedList: Array<Collection>, selectedItem: Collection) => {
		console.log("select " + selectedList.map((record) => record.collection) + " item " + selectedItem.collection);
		setCollections(selectedList);
	}

	const change: ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log("manually typed CA: " + event.target.value);
	};
	
	return (
		<LayoutFront pageClass="front">
			<div className="intro1 section-padding">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-xl-5">
							<div className="intro-content">
								<p>Proof of loyalty FOR</p>
								<h1>NFT Creators</h1>

								<div className="col-xl-12">
									<h4>Pre-selected collections</h4>
									<p>Loads faster if all collections of the same brand (e.g. Azuki) are chosen together</p>
									<div className="intro-search">
										<form onSubmit={submitForm}>
											<Multiselect
												displayValue="collection"
												groupBy="brand"
												placeholder="Click on any collections"
												onKeyPressFn={submitForm}
												onRemove={remove}
												onSearch={function noRefCheck(){}}
												onSelect={select}
												options={Azuki.concat(Doodles).concat(Memeland).concat(Proof).concat(RTFKT).concat(Yugalabs)}
												selectedValues={defaultCollection}
												showCheckbox
											/>
											<span>
												<button type="submit" className="ri-search-line"></button>
											</span>
										</form>
									</div>
								</div>
								<div className="col-xl-12">
									<br></br> 
									<h4>Manually type in any contract address(es) (slower)</h4>
									<p>e.g. 0x6efc003d3f3658383f06185503340c2cf27a57b6;
										0x769272677fab02575e84945f03eca517acc544cc;
										0x39ee2c7b3cb80254225884ca001f57118c8f21b6</p>
									<div className="intro-search">
										<form onSubmit={submitForm}>
											<input
												type="text"
												placeholder="contract address(es) separated by ;"
												onChange={change}
											/>
											<span>
												<button type="submit" className="ri-search-line"></button>
											</span>
										</form>
									</div>
								</div>

								<div className="intro-social">
									<Link href="#">
										<a>
											<i className="bi bi-facebook"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-twitter"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-tiktok"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-telegram"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-discord"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="intro-slider">
								<IntroSlider />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="leaderboard section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-6">
							<div className="section-title">
								<h2>Leaderboard</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6">
							<h3>Top creator fees paid Leaderboard for collections</h3>
														
							<div className="leaderboard-table">
								<div className="table-responsive">
									<table className="table">
										<tbody>
											{TableHeader(tableHeaders)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							{TopCreatorFeesPaid(collections.map((record) => record.address))}
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6">
							<h3>Top collectors by holding period Leaderboard for collections</h3>

							<div className="leaderboard-table">
								<div className="table-responsive">
									<table className="table">
										<tbody>
											{TableHeader(tableHeaders)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							{TopHoldingPeriod(collections.map((record) => record.address))}
						</div>
					</div>
				</div>
			</div>
		</LayoutFront>
	);
};

export default Index;
