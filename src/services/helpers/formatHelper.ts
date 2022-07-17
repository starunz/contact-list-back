import { CreateContactBody } from '../../interfaces/contactInterface';

const formatContactInfo = (contactInfo: CreateContactBody) => {
	const formattedInfo = {
		...contactInfo,
		email: contactInfo.email.toLowerCase().trim(),
	};

	return formattedInfo;
};

export {
	formatContactInfo,
};
