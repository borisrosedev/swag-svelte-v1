import { getOneItemById } from "./products";


const USERS = [
    {
        id: 0,
        firstname: 'Muri',
        lastname: 'Botelho',
        fullname: 'Muri Botelho',
        email: 'muri.botelho@gmail.com',
        password: 'caroline123',
        payments: [
            {
                id: 0,
                userId: 0,
                amount_cent: 15000,
                mode: 'stripe',
                created_at: new Date('2025-03-21')
            },
            {
                id: 1,
                userId: 0,
                amount_cent: 12000,
                mode: 'stripe',
                created_at: new Date('2025-03-22') 
            }
        ],
        cart: [
            {
                id: 0,
                userId: 0,
                items: [
                    getOneItemById(4),getOneItemById(5)
                ],
                created_at: new Date('2025-02-21'),
                updated_at: new Date('2025-11-21')
            }
        ],
        orders: [
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
                        name: getOneItemById(4)?.name,                         
                        quantity: 1,                        
                        created_at: new Date('2025-03-21'),                      
                        updated_at: new Date('2025-03-21'),
                    },
                ]
            },
            {
                id: 1,
                userId: 0,
                paymentId: 1,
                created_at: new Date('2025-03-22'),
                items: [
                    {
                        id: 1,                               
                        order_id: 0,                     
                        item_id: 5,                            
                        price_cent: 150000,                         
                        name: getOneItemById(5)?.name,                         
                        quantity: 1,                        
                        created_at: new Date('2025-03-21'),                           
                        updated_at: new Date('2025-03-21')
                    },
                ]
            }
        ],
        photos: [
            '/users/muri-botelho-1.jpg'
        ]
    }
]


function getOneByEmail(email: string): Promise<unknown> {
    return new Promise((resolve) => {
        const user = USERS.find((el) => el.email == email)
        resolve(user)  
    })

}

export default USERS;
export { getOneByEmail }