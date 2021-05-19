function CloudMedium(props) {
	return (
		<svg
			id="prefix__Capa_1"
			data-name="Capa 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 244 231"
			{...props}
		>
			<defs>
				<style>{`.prefix__cls-${props.id}{fill:${props.color}}`}</style>
			</defs>
			<title>{"cloud_medium"}</title>
			<path
				className={`prefix__cls-${props.id}`}
				d="M355.5 268h-78a16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5h52a16.5 16.5 0 0016.5-16.5 16.5 16.5 0 00-16.5-16.5h-138a16.5 16.5 0 00-16.5 16.5 16.5 16.5 0 0016.5 16.5h36a16.5 16.5 0 0116.5 16.5 16.5 16.5 0 01-16.5 16.5h-83a16.5 16.5 0 00-16.5 16.5 16.5 16.5 0 0016.5 16.5h211a16.5 16.5 0 0016.5-16.5 16.5 16.5 0 00-16.5-16.5z"
				transform="translate(-128 -136)"
			/>
			<rect
				className={`prefix__cls-${props.id}`}
				x={166}
				y={198}
				width={46}
				height={33}
				rx={16.5}
			/>
			<rect className={`prefix__cls-${props.id}`} x={12} width={46} height={33} rx={16.5} />
		</svg>
	)
}

export default CloudMedium;