interface CreateContactBody {
	name: string
	phone: string
	email: string
	img: string
}

interface UpdateContactInfo {
	contactInfo: CreateContactBody
	contactId: string
}

export {
	CreateContactBody,
	UpdateContactInfo,
};
