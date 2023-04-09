import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";
import Leaderboard from "./leaderboard";
import IntroSlider from "../components/slider/IntroSlider";

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
					<div className="col-xl-12">
						<Leaderboard/>
						</div>
					</div>
				</div>
			</div>
		</LayoutFront>
	);
};

export default Index;
