type HomeGridItemType = {
	id: number;
	name: string;
	img: string;
}

type KetoItemType = {
	id: number;
	name: string;
	img: string;
	price: number;
	productInfo: string[];
	ingredients: string[];
	careInstruction: string;
}

type ConsultItemType = {
	id: number,
	title: string,
	content: string,
	sub: string,
	price: number;
	img: string;
}

type FormDataType = {
	email: string,
	userName: string,
	subject: string,
	message: string
}

type HideHandler = () => void;
