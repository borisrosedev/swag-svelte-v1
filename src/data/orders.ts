const ORDERS = [
	{
		id: 0,
		userId: 0,
		paymentId: 0,
		created_at: new Date('2025-03-21'),
		items: [
			{
				id: 0,
				order_id: 0,
				item_id: 4,
				price_cent: 15,
				name: '...',
				quantity: 1,
				created_at: new Date('2025-03-21'),
				updated_at: new Date('2025-03-21')
			}
		]
	},
	{
		id: 1,
		userId: 0,
		paymentId: 1,
		created_at: new Date('2025-03-22'),
		items: [
			{
				id: 10,
				order_id: 0,
				item_id: 5,
				price_cent: 150000,
				name: '...',
				quantity: 1,
				created_at: new Date('2025-03-21'),
				updated_at: new Date('2025-03-21')
			}
		]
	}
];

export default ORDERS;
