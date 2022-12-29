import style from './Sidebar.module.css';
const Sidebar = () => {
	return (
		<div className={style.container}>
			<div className={style.head}>
				<span>ABOUT ME</span>
				<img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
				<p>
					Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
					amet ex esse.Sunt eu ut nostrud id quis proident.
				</p>
			</div>
			<div></div>
		</div>
	);
};

export default Sidebar;
