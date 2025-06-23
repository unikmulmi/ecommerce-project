
import styles from './PaymentSection.module.css'

    <div className="col-md-4">
        <div className={`card ${styles.card}`}>
            <div className="card-header" style={{backgroundColor: '#6050DC' , color:"white"}}>
                <h5>Payment Options</h5>
            </div>
            <div className="card-body">
                {/* PayPal Button */}
                <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id='paypal-button'>
                    <i className="bi bi-paypal"></i>Pay with PayPal
                </button>
                {/* Flutterwave Button */}
                <button className={`button btn btn-warning w-100 ${styles.flutterwaveButton}`} id='flutterwave-button'>
                    <i className="bi bi-credit-card"></i>Pay with FlutterWave
                </button>

            </div>
        </div>
    </div>

