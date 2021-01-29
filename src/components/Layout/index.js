

import style from './style.module.css';


const Layout = ({ id, title, descr, urlBg, colorBg }) => {

	const styleBg = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: `${colorBg}` }
	console.log([style.desc, style.full].join(" "))
	return (
		<section className={style.root} id={id} style={styleBg} >
			<div className={style.wrapper}>
				< article >
					<div className={style.title}>
						<h3>{title}</h3>
						<span className={style.separator}></span>
					</div>
					<div className={[style.desc, style.full].join(" ")}>
						<p>{descr}</p>
					</div>
				</article >
			</div >
		</section >
	)
}

export default Layout;