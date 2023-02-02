import React, { useState } from 'react'

// Images
import copy from '../../Images/copy.png'
import fire from '../../Images/fire.png'

// Stylse
import styles from './FullPage.module.css'

// Function
import { passGen } from '../../Validation/passGen'

const FullPage = () => {

    // Length Function
    const [length, setLength] = useState({
        length: "",
    });

    const changeHandler = (event) => {
        setLength({
            ...length,
            [event.target.name]: event.target.value,
        });
    };

    // Power Functiion
    const [power, setPower] = useState({
        password_power: "",
    });
    const radioHadnler = (event) => {
        setPower({
            [event.target.name]: event.target.value,
        });
    }

    // Generate btn Function
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const generateHandler = () => {
        if (length.length && power.password_power) {
            setPassword(passGen(Number(length.length), String(power.password_power)));
            setError(false);
        } else {
            setError(true);
        }
    }

    // Copy Function
    const [didCopy, setDidCopy] = useState(false);
    const [empty, setEmpty] = useState(false);
    const copyHandler = () => {
        if (password) {
            navigator.clipboard.writeText(password)
            setDidCopy(true);
            setTimeout(()=> {
                setDidCopy(false)
            }, 2000)
        } else {
            setEmpty(true);
            setTimeout(()=> {
                setEmpty(false)
            }, 2000)
        }
    }

    return ( 
        <div className={styles.fullpage_container}>
            <h3>Password Generator - by ecma</h3> 
            <section className={styles.config_box}>
                <div className={styles.pass_here}>
                    { password
                        ? 
                        <p className={styles.generatedPass}>{password}</p>
                        :
                        <p>P4$5W0rD!</p>
                    }
                    <img src={copy} alt="copy icon" onClick={copyHandler} />
                </div>
                { didCopy
                    ?
                    <div className={styles.copy_div}>
                        <div></div>
                        <p>Copied! Keep It Safe.</p>
                        <div></div>
                    </div>
                    :
                    undefined
                }
                { empty
                    ?
                    <div className={styles.empty_div}>
                        <div></div>
                        <p>Generate A Password First!</p>
                        <div></div>
                    </div>
                    :
                    undefined
                }
                <div className={styles.optiones_here}>
                    <div className={styles.length_op}>
                        <p>character lenght(1-32)</p>
                        <span className={styles.length_num}>{length.length}</span>
                    </div>
                    <div className={styles.lenght_slider}>
                        <input type="range" name="length" min="0" max="32" onChange={changeHandler}/>
                    </div>
                    <div className={styles.power_op}>
                        <div className={styles.tooltip}>
                            <input type="radio" id="normal" name="password_power" value="normal" onClick={radioHadnler}/>
                            <label for="normal">Normal Password</label><br/>
                            <span className={styles.tooltiptext}>A normal password contains only lower case english alphabet.</span>
                        </div>
                        <div className={styles.tooltip}>
                            <input type="radio" id="strong" name="password_power" value="strong" onClick={radioHadnler}/>
                            <label for="strong">Strong Password</label><br/>
                            <span className={styles.tooltiptext}>A strong password contains lower case english alphabet and numbers.</span>
                        </div>
                        <div className={styles.tooltip}>
                            <input type="radio" id="superstrong" name="password_power" value="superstrong" onClick={radioHadnler}/>
                            <label for="superstrong">Super Strong Password</label><br/>
                            <span className={styles.tooltiptext}>A super strong password contains lowercase english alphabet, numbers and uppercase english alphabet.</span>
                        </div>
                        <div className={styles.tooltip}>
                            <input type="radio" id="godmode" name="password_power" value="godmode" onClick={radioHadnler}/>
                            <label for="godmode">God Mode Password</label><img src={fire} alt="fire icon" /><br/>
                            <span className={styles.tooltiptext}>A god mode password contains lowercase english alphabet, numbers, uppercase english alphabet and symbols</span>
                        </div>
                    </div>
                    <button className={styles.customize_btn}>
                        <span>customize</span>
                    </button>
                    <button className={styles.generate_btn} onClick={generateHandler}>
                        <span>Generate</span>
                    </button>
                </div>
                { error
                    ?
                    <div className={styles.error_div}>
                        <div></div>
                        <p>Adjust Both The Options And The Length.</p>
                        <div></div>
                    </div>
                    :
                    undefined
                }
            </section>
        </div>
     );
}
 
export default FullPage;