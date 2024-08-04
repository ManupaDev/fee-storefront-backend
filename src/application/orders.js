import Order from "../infrastructure/schemas/Order.js";
import {createOrderDto} from "./dto/orders.js"

export const postOrder =  async(req, res) =>{

    
    const order = createOrderDto.safeParse(req.body);

    console.log(order);
    

    if(!order.success){
        return res.status(400).json({ message: "Invalid data" }).send();
    
    }
    await Order.create({
        userId: order.data.userId,
        orderProducts: order.data.orderProducts,
        total: order.data.total
    })
    return res.status(201).send();

}