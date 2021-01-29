import style from './style.module.css';


const Layout = ({ id, title, urlBg, colorBg, children }) => {
	const styleBg = {}
	if (urlBg) { styleBg.backgroundImage = `url(${urlBg})` }
	if (colorBg) { styleBg.backgroundColor = colorBg }
	return (
		<section className={style.root} id={id} style={styleBg} >
			<div className={style.wrapper}>
				< article >
					<div className={style.title}>
						<h3>{title}</h3>
						<span className={style.separator}></span>
					</div>
					<div className={[style.desc, style.full].join(" ")}>
						{children}
					</div>
				</article >
			</div >
		</section >
	)
}

export default Layout;