import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Ratings from "../components/Ratings";
import { useNavigate } from "react-router-dom";

export function EcommerceCard(props) {
    const navigate = useNavigate();
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {props.title}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        {`$${props.price}`}
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    {props.stock > 0 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger'>Out of stock</button>}
                    <Ratings value={props.rating} readOnly />
                </div>

            </CardBody>
            <CardFooter className="pt-0">

                <Button
                    onClick={() => { navigate(`/product/${props.id}`) }}
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    View
                </Button>
            </CardFooter>
        </Card >
    );
}