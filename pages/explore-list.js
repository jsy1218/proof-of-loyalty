import LayoutFront from "../components/layout/LayoutFront";
import ExploreList from './../components/elements/ExploreList';

const Project = () => {
	return (
		<>
			<LayoutFront 
			 pageClass={"front"}
			 headTitle={"Explore List"}
			 pageTitle={"Explore List"}
			 pageTitleSub={"Welcome Explore List Page"}
			 parent={"Home"}
			 child={"Explore List"}>
				<div className="explore-list upcoming-project section-padding">
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
			</LayoutFront>
		</>
	);
};

export default Project;
