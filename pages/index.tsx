import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";
import TopCreatorFeesPaid from "../util/topcreatorfeespaid";
import IntroSlider from "../components/slider/IntroSlider";
import TopHoldingPeriod from "../util/topholdingperiod";
import Multiselect from "multiselect-react-dropdown";

const Index = () => {
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
										<form action="#">
											<Multiselect
												displayValue="collection"
												groupBy="brand"
												placeholder="Click on any collections"
												onKeyPressFn={function noRefCheck(){}}
												onRemove={function noRefCheck(){}}
												onSearch={function noRefCheck(){}}
												onSelect={function noRefCheck(){}}
												options={[
													{
														brand: 'Azuki',
														collection: 'PFP',
														address: '0xed5af388653567af2f388e6224dc7c4b3241c544'
													},
													{
														brand: 'Azuki',
														collection: 'BEANZ',
														address: '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949'
													},
													{
														brand: 'Doodles LLC',
														collection: 'Doodles',
														address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e'
													},
													{
														brand: 'Doodles LLC',
														collection: 'Space Doodles',
														address: '0x620b70123fb810f6c653da7644b5dd0b6312e4d8'
													},
													{
														brand: 'Doodles LLC',
														collection: 'Dooplicators',
														address: '0x466cfcd0525189b573e794f554b8a751279213ac'
													},
													{
														brand: 'Doodles LLC',
														collection: 'Genesis Box',
														address: '0xb75f09b4340aeb85cd5f2dd87d31751edc11ed39'
													},
													{
														brand: 'Memeland',
														collection: 'YOU THE REAL MVP',
														address: '0x6efc003d3f3658383f06185503340c2cf27a57b6'
													},
													{
														brand: 'Memeland',
														collection: 'The Captainz',
														address: '0x769272677fab02575e84945f03eca517acc544cc'
													},
													{
														brand: 'Memeland',
														collection: 'The Potatoz',
														address: '0x39ee2c7b3cb80254225884ca001f57118c8f21b6'
													},
													{
														brand: 'Proof',
														collection: 'Proof Collective',
														address: '0x08d7c0242953446436f34b4c78fe9da38c73668d'
													},
													{
														brand: 'Proof',
														collection: 'Moonbirds',
														address: '0x23581767a106ae21c074b2276d25e5c3e136a68b'
													},
													{
														brand: 'Proof',
														collection: 'Oddities',
														address: '0x1792a96e5668ad7c167ab804a100ce42395ce54d'
													},
													{
														brand: 'RTFKT',
														collection: 'Clone X',
														address: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'
													},
													{
														brand: 'Yugalabs',
														collection: 'Bored Ape Yacht Club',
														address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
													},
													{
														brand: 'Yugalabs',
														collection: 'Mutant Ape Yacht Club',
														address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6'
													},
													{
														brand: 'Yugalabs',
														collection: 'Bored Ape Kennel Club',
														address: '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623'
													},
													{
														brand: 'Yugalabs',
														collection: 'CryptoPunks',
														address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
													},
													{
														brand: 'Yugalabs',
														collection: 'Meebits',
														address: '0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7'
													},
													{
														brand: 'Yugalabs',
														collection: 'Otherdeed for Otherside',
														address: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258'
													},
												]}
												showCheckbox
											/>
											<span>
												<i className="ri-search-line"></i>
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
										<form action="#">
											<input
												type="text"
												placeholder="contract address(es) separated by ;"
											/>
											<span>
												<i className="ri-search-line"></i>
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
							<div className="section-title">
								<h3>Top creator fees paid Leaderboard</h3>
							</div>
						</div>
						<div className="col-xl-12">
							<TopCreatorFeesPaid/>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6">
							<div className="section-title">
								<h3>Top collectors by holding period Leaderboard</h3>
							</div>
						</div>
						<div className="col-xl-12">
							<TopHoldingPeriod/>
						</div>
					</div>
				</div>
			</div>
		</LayoutFront>
	);
};

export default Index;
