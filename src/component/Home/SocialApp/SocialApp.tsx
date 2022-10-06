import React from 'react'
import './SocialApp.scss';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';


const SocialApp = () => {
  return (
<>
<section className="social-app  bg-blue">
	<div className="container text-center py-5">
		<div className="row">
			<div className="col-lg-12">
				<h2 className='head'>It's time to change your mind</h2>
				<p className='para'>Download over 2 million humans .Get <a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">Small Apps</a> free forever!
					We say you won’t look back.</p>
				<ul className="list-inline">
					<li className="list-inline-item">
						<a href="" className=" btn-social-icon">
							<AppleIcon />
							Iphone
						</a>
					</li>
					<li className="list-inline-item">
						<a href="" className=" btn-social-icon">
						<AdbIcon />
							Android
						</a>
					</li>
					<li className="list-inline-item">
						<a href="" className=" btn-social-icon">
							<i className="ti-microsoft-alt"></i>
							Windows
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
</>
  )
}

export default SocialApp