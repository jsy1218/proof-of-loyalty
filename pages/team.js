import Link from "next/link";
import TeamMember from "../components/elements/TeamMember";
import LayoutFront from "../components/layout/LayoutFront";


const Teamdetails = () => {

	return (
		<>
			<LayoutFront 
			 pageClass={"front"}
			 headTitle={"Team"}
			 pageTitle={"Team"}
			 pageTitleSub={"Welcome Team Page"}
			 parent={"Home"}
			 child={"Team"}>
				<div className="teamdetails section-padding">
					<div className="container">
						<div className="row">
							<TeamMember />
						</div>
					</div>
				</div>
			</LayoutFront>
		</>
	);
};



export default Teamdetails;
