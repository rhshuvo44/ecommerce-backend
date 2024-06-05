import { Request, Response } from "express"
import { orderService } from "./order.service"
import { OrderValidationSchema } from "./order.validation"
// create a new order 
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body
        const zodValidationData = OrderValidationSchema.parse(orderData)
        const { data, message } = await orderService.orderCreate(zodValidationData)
        res.status(200).json({
            success: true,
            message,
            data
        })
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: error.message,
            data: null
        })
    }
}


export const orderController = {
    createOrder,
    // getAllOrder,

}