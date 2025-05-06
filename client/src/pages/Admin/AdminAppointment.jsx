import * as React from "react";
import styles from"../../Styles/AdminAppointment.module.css";
import Nav from "../../Components/Nav"

function AdminAppointment() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav/>x
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0e229955c26d5b78b5c92b36ddb1e056cad835?apiKey=262e07c0c4304fc58fb24602708984bc&"
              altText="Profile Image"
              className={styles.profileImg}
            />
            <span className={styles.span}>Rajesh Maharjan</span>
          </div>
          <div className={styles.div4}>
            <div className={styles.div5}>
              <span className={styles.span2}></span>
              <span>Dashboard</span>
            </div>
            <div className={styles.div6}>
              <span className={styles.span3}></span>
              <span>Appointments</span>
            </div>
            <div className={styles.div7}>
              <span className={styles.span4}></span>
              <span>Doctors</span>
            </div>
            <div className={styles.div8}>
              <span className={styles.span5}></span>
              <span>Patients</span>
            </div>
            <div className={styles.div9}>
              <span className={styles.span6}></span>
              <span>Specialties</span>
            </div>
            <div className={styles.div10}>
              <span className={styles.span7}></span>
              <span>Profile Settings</span>
            </div>
            <div className={styles.div11}>
              <span className={styles.span8}></span>
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          
          <div className={styles.div21}>
          <div className={styles.div22}>
  <span className={styles.span13}>Appointments</span>

  <div className={styles.main}>
    {/* Left side: Upcoming, Today, All */}
    <div className={styles.div23}>
      <div className={styles.div24}>Upcoming</div>
      <div className={styles.div25}>Today</div>
      <div className={styles.div26}>All</div>
    </div>

    {/* Right side: Input and icon */}
    <div className={styles.div27}>
      <input type="text" placeholder="Enter name" className={styles.input} />
      <img
        src="https://i.imgur.com/avKpuBI.png"
        className={styles.search1}
        alt="Search"
      />
    </div>
  </div>
</div>

            <div className={styles.div28}>
              <div className={styles.div29}>
                <div className={styles.div30}>Patient Name</div>
                <div className={styles.div31}>Appt Date</div>
                <div className={styles.div32}>Specialty</div>
                <div className={styles.div33}>Amount</div>
                <div className={styles.div34}>Doctor Name</div>
              </div>
              <div className={styles.div35}>
                <div className={styles.div36}>
                  <div className={styles.div37}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div38}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span14}>10.00 AM</span>
                  </div>
                  <div className={styles.div39}>Pediatrics</div>
                  <div className={styles.div40}>$150</div>
                  <div className={styles.div41}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div42}>
                    <div className={styles.div43}>
                      <span className={styles.span15}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div44}>
                  <div className={styles.div45}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div46}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span16}>10.00 AM</span>
                  </div>
                  <div className={styles.div47}>Pediatrics</div>
                  <div className={styles.div48}>$150</div>
                  <div className={styles.div49}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div50}>
                    <div className={styles.div51}>
                      <span className={styles.span17}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div52}>
                  <div className={styles.div53}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div54}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span18}>10.00 AM</span>
                  </div>
                  <div className={styles.div55}>Pediatrics</div>
                  <div className={styles.div56}>$150</div>
                  <div className={styles.div57}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div58}>
                    <div className={styles.div59}>
                      <span className={styles.span19}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div60}>
                  <div className={styles.div61}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div62}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span20}>10.00 AM</span>
                  </div>
                  <div className={styles.div63}>Pediatrics</div>
                  <div className={styles.div64}>$150</div>
                  <div className={styles.div65}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div66}>
                    <div className={styles.div67}>
                      <span className={styles.span21}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div68}>
                    <div className={styles.div69}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                        <span>Richard Wilson</span>
                    </div>
                  <div className={styles.div70}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span22}>10.00 AM</span>
                  </div>
                  <div className={styles.div71}>Pediatrics</div>
                  <div className={styles.div72}>$150</div>
                  <div className={styles.div73}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div74}>
                    <div className={styles.div75}>
                      <span className={styles.span23}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div76}>
                  <div className={styles.div77}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div78}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span24}>10.00 AM</span>
                  </div>
                  <div className={styles.div79}>Pediatrics</div>
                  <div className={styles.div80}>$150</div>
                  <div className={styles.div81}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div82}>
                    <div className={styles.div83}>
                      <span className={styles.span25}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div84}>
                  <div className={styles.div85}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div86}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span26}>10.00 AM</span>
                  </div>
                  <div className={styles.div87}>Pediatrics</div>
                  <div className={styles.div88}>$150</div>
                  <div className={styles.div89}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div90}>
                    <div className={styles.div91}>
                      <span className={styles.span27}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div92}>
                  <div className={styles.div93}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div94}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span28}>10.00 AM</span>
                  </div>
                  <div className={styles.div95}>Pediatrics</div>
                  <div className={styles.div96}>$150</div>
                  <div className={styles.div97}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div98}>
                    <div className={styles.div99}>
                      <span className={styles.span29}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div100}>
                  <div className={styles.div101}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div102}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span30}>10.00 AM</span>
                  </div>
                  <div className={styles.div103}>Pediatrics</div>
                  <div className={styles.div104}>$150</div>
                  <div className={styles.div105}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div106}>
                    <div className={styles.div107}>
                      <span className={styles.span31}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div108}>
                  <div className={styles.div109}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div110}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span32}>10.00 AM</span>
                  </div>
                  <div className={styles.div111}>Pediatrics</div>
                  <div className={styles.div112}>$150</div>
                  <div className={styles.div113}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div114}>
                    <div className={styles.div115}>
                      <span className={styles.span33}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div116}>
                  <div className={styles.div117}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div118}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span34}>10.00 AM</span>
                  </div>
                  <div className={styles.div119}>Pediatrics</div>
                  <div className={styles.div120}>$150</div>
                  <div className={styles.div121}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span className={styles.text}>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div122}>
                    <div className={styles.div123}>
                      <span className={styles.span35}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div124}>
                  <div className={styles.div125}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div126}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span36}>10.00 AM</span>
                  </div>
                  <div className={styles.div127}>Pediatrics</div>
                  <div className={styles.div128}>$150</div>
                  <div className={styles.div129}>
                  <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div130}>
                    <div className={styles.div131}>
                      <span className={styles.span37}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div132}>
                  <div className={styles.div133}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div134}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span38}>10.00 AM</span>
                  </div>
                  <div className={styles.div135}>Pediatrics</div>
                  <div className={styles.div136}>$150</div>
                  <div className={styles.div137}>
                  <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div138}>
                    <div className={styles.div139}>
                      <span className={styles.span39}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.div140}>
                  <div className={styles.div141}>
                  <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60d743bb5246bf8383aa7948c134b08df74f0f?apiKey=262e07c0c4304fc58fb24602708984bc&"
                            alt="Patient Image"
                            className={styles.patientImg}
                        />
                    <span>Richard Wilson</span>
                  </div>
                  <div className={styles.div142}>
                    <span>11 Nov 2025</span>
                    <span className={styles.span40}>10.00 AM</span>
                  </div>
                  <div className={styles.div143}>Pediatrics</div>
                  <div className={styles.div144}>$150</div>
                  <div className={styles.div145}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014702d2d85b23e49d00f77e9ac2c4de510e53e?apiKey=262e07c0c4304fc58fb24602708984bc&"
                      altText="Doctor Image"
                      className={styles.doctorImg}
                    />
                    <span>Dr. Richard Wilson</span>
                  </div>
                  <div className={styles.div146}>
                    <div className={styles.div147}>
                      <span className={styles.span41}></span>
                      <span>View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div148}>
            Copyright © 2025 Curely. All Rights Reserved
          </div>
        </div>
      </div>

    </>
  );
}

export default AdminAppointment;
