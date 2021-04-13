import image from './assets/images/certificado.png';
export default function Pdf({ name }) {
	return (
		<div>
			<div className="container">
				<img height={595} src={image} alt="" />
				<div className="name">{name.toUpperCase()}</div>
			</div>
		</div>
	);
}
