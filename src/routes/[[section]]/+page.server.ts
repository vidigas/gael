const imageSrc = {
	'quem-somos': 'home_bg_image',
	missao: 'missao',
	comunidade: 'comunidade'
};

const sections = {
	'quem-somos': {
		path: "quem-somos",
		title: "quem somos",
		text: "Somos um instituto de educação infantil sem fins lucrativos, formado por um grupo de famílias e educadores unidos pelo objetivo de levar uma educação digna à comunidade de Boracéia.",
	},
	missao: {
		path: "missao",
		title: "nossa missão",
		text: "Promover o desenvolvimento integral do ser humano através de uma ação educativa baseada na autonomia e na liberdade",
  },
	comunidade: {
		path: "comunidade",
		title: "comunidade",
		text: "Atendemos crianças de 3 a 14 anos da comunidade local em período integral ou contra turno. Oferecemos gratuidade para mais da metade de nossos alunos, oriundos de famílias em situação de vulnerabilidade. ",
  },
};

//@ts-ignore
export function load({ params }) {
	return {
		//@ts-ignore
		imageSrc: imageSrc[params.section ?? 'quem-somos'],
		//@ts-ignore
		sectionData: sections[params.section ?? 'quem-somos'],
		sections: sections,
	};
}
