import Link from "next/link";
import TeamMember from "../components/elements/TeamMember";
import LayoutFront from "../components/layout/LayoutFront";
import CompleteList from './../components/elements/CompleteList';
import ExploreList from './../components/elements/ExploreList';
import IntroSlider from "./../components/slider/IntroSlider";

const Index = () => {
	return (
		<>
			<LayoutFront pageClass={"front"}>
				<div className="intro1 section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-xl-5">
								<div className="intro-content">
									<p>THE NEXT-GENERATION LAUNCHPAD FOR</p>
									<h1>Blockchain Games and the Metaverse</h1>

									<div className="intro-btn">
										<Link href="#">
											<a className="btn btn-primary">
												Launchpad
											</a>
										</Link>
										<Link href="#">
											<a className="btn btn-outline-primary">
												KYC for IDO
											</a>
										</Link>
									</div>
									<div className="intro-search">
										<form action="#">
											<input
												type="text"
												placeholder="Search Here"
											/>
											<span>
												<i className="ri-search-line"></i>
											</span>
										</form>
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

				<div className="upcoming-project section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Upcoming Projects</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<ExploreList/>
						</div>
					</div>
				</div>
				<div className="completed-project section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Completed Projects</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<CompleteList/>
						</div>
					</div>
				</div>

				<div className="what-we-do section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-5">
								<div className="what-we-do-img">
									<img
										src="/images/items/v2.jpg"
										alt=""
										className="img-fluid rounded"
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="what-we-do-content">
									<span>WELCOME TO GigoSTARTER</span>
									<h3>What We Do</h3>
									<p>
										We’re a blockchain gaming launchpad
										focused on growing the Gigo ecosystem
										and the metaverse.
									</p>
									<p>
										Built on Gigo’s JumpNet with a roadmap
										towards Efinity, our proprietary
										platform will enable creators and game
										developers to run capital-raising
										campaigns and build communities using
										blockchain technology.
									</p>
									<p>
										Beyond issuing tokens, we provide game
										developers a way to explore other
										innovative ways of raising capital to
										fund their projects through the sale of
										virtual items as non-fungible tokens
										(NFTs).
									</p>
									<p>
										Our incubation program, supported by an
										accredited partner network, will provide
										projects with end-to-end support to
										develop sustainable strategies and
										launch successful campaigns.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mission-vission section-padding bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="mission-vission-content">
									<span>
									<i class="ri-send-plane-fill"></i>
									</span>
									<h6>Our Mission</h6>
									<h3>
										Create Ecosystem For
										Blockchain Gaming
									</h3>
									<p>
										To help create a better world by
										embracing blockchain-powered emerging
										technologies. We believe we are in a
										pivotal moment in history where humanity
										is preparing for the New Normal Virtual
										worlds will accelerate us into this new
										reality, revolutionizing how we live,
										work and play.
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mission-vission-content">
									<span>
									<i class="ri-eye-fill"></i>
									</span>
									<h6>OUR VISION</h6>
									<h3>Building A Community</h3>
									<p>
										To build a thriving ecosystem for
										blockchain gaming and introduce new ways
										for players earn crypto in a fun,
										engaging way. Community is the core of
										our organization, and we’re building a
										tribe of forward-thinking
										early-adopters, creators and supporters.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="creating section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="creating-content">
									<img
										src="/images/items/4.jpg"
										class="img-fluid rounded"
										alt=""
									/>
									<h3>Embrace the Gigo Ecosystem</h3>
									<p>
										We help creators and game development
										studios embrace Gigo robust blockchain
										ecosystem for their Bblockchain and
										digital asset strategies. We will guide
										developers on integrating and move their
										NFTs from any chain onto Efinity.
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="creating-content">
									<img
										src="/images/items/5.jpg"
										class="img-fluid rounded"
										alt=""
									/>
									<h3>Embrace the Gigo Ecosystem</h3>
									<p>
										We help creators and game development
										studios embrace Gigo robust blockchain
										ecosystem for their Bblockchain and
										digital asset strategies. We will guide
										developers on integrating and move their
										NFTs from any chain onto Efinity.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="built-in section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Built On Gigo's Jumpnet Blockchain</h2>
								</div>
							</div>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-4">
								<div className="built-in-list">
									<ul>
										<li><i class="ri-arrow-right-s-line"></i> No gas fees</li>
										<li><i class="ri-arrow-right-s-line"></i> Carbon-negative NFTs</li>
										<li><i class="ri-arrow-right-s-line"></i> Smart contract support</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-8 col-md-12">
								<div className="row">
									<div className="col-md-4">
										<div className="built-in-content">
											<span><i class="ri-rocket-fill"></i></span>
											<h4>Lunchpad</h4>
											<p>
												Buying and Selling of NFTs,
												in-game items and more
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className="built-in-content">
											<span><i class="ri-group-fill"></i></span>
											<h4>Management</h4>
											<p>
												Buying and Selling of NFTs,
												in-game items and more
											</p>
										</div>
									</div>
									<div className="col-md-4">
										<div className="built-in-content">
											<span><i class="ri-award-fill"></i></span>
											<h4>Reward</h4>
											<p>
												Buying and Selling of NFTs,
												in-game items and more
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="team section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Meet Our Team</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<TeamMember/>
						</div>
					</div>
				</div>

				<div className="investor section-padding">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-6">
								<div className="section-title text-center">
									<h2>Institutional Investors</h2>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/1.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/2.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/3.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/4.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/5.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/6.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/7.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/8.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/9.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/10.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/11.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/2.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutFront>
		</>
	);
};

export default Index;
