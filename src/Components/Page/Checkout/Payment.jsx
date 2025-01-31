import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../Style"
import Box from '@mui/material/Box';


const Payment = ({ SetShowPlaceOrder }) => {
    const classes = useStyles()

    const [value, setValue] = React.useState('');
    const [PaymentRestData, SetPaymentRestData] = React.useState(true)
    const HandlePaymentRestData = () => {
        SetPaymentRestData(false)
        SetShowPlaceOrder(true)
    }
    const ShowAgainPaymentRestData = () => {
        SetPaymentRestData(true)
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row center deliver_row_margin">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 payment_container">
                        <div className="row">
                            <div className="col-12">
                                <p className='font_size_paragraph' onClick={ShowAgainPaymentRestData}>Payment</p>

                            </div>

                        </div>
                        {PaymentRestData &&

                            <div>

                                <div className="row">
                                    <div className=" col-lg-6 col-md-6 col-sm-6 col-12">
                                        <p>Payment Method</p>

                                    </div>
                                    <div className=" col-lg-6 col-md-6 col-sm-6 col-12 text-end">
                                        <p className='paymentChange'>Change</p>

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <Box
                                        className={classes.deliveryOptionRadioBtn}
                                        >
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={value}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel value="I plan to pay delivery at cash" control={<Radio />} label="We Accept Cash On Delivery" />

                                            </RadioGroup>
                                        </FormControl>
                                         </Box>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-12 col-lg-4 height_delivery_information_btn'>
                                        <Box
                                            className={`  ${classes.loadingBtnTextAndBack}`}
                                        >
                                            <LoadingButton onClick={HandlePaymentRestData} variant="outlined">continue</LoadingButton>
                                        </Box>
                                    </div>

                                </div>
                            </div>}

                    </div>

                </div>

            </div >
        </React.Fragment>
    )
}
export default Payment