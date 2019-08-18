---
title: Zaber Supporting Supermileage
---

In October 2017, [Zaber Technologies](https://www.zaber.com/) donated two
linear actuators to the UBC Supermileage Team for use
in their dynamometer. The actuator models were the
A_BAR200BPC-KT07U and the T-NA08A50-KT01U.

The purpose of the equipment was to design, build, and
implement a chassis dynamometer for the UBC Supermileage
Design Team. The dyno is to be used for testing engine torque
to improve engine efficiency through tuning optimization.

![Dyno](https://i.imgur.com/9HnCS2e.png){: .img-responsive}

### Timeline:

The project began in September 2016 and was
completed in April 2018. The team started working on
the actuator portions of the project in November 2017.

### Approach:

- Estimate loads caused by vehicle weight and engine acceleration
- Determine dynamometer dimensions and frame design. We decided to use 1-inch square steel tubes for the frame due to
its desired cost, strength, and ease of welding. Moreover, a Solidworks FEA on the frame to ensure an appropriate safety
factor of 3 or more.

For our Dynamometer we decided to use dual rollers for increased vehicle stability. Rollers are 6.625-inch diameter hollow
aluminum with 1/4'' wall thickness. The diameter was determined by calculating the force between the vehicle wheel and
roller mechanism and estimating the required tire contact area to transmit this force without tire slippage.

![Roller](https://i.imgur.com/RMzYcGT.png){: .img-responsive }

- Design optical encoder set-up.
We used an infrared encoder with
a water-jet cut filter wheel.
The wheel has ten gaps per
revolution.

- Mount brake assembly, torque transducer,
and optical encoder on front shaft.
Torque and RPM measurements are acquired
via a National Instruments Data Acquisition Module (DAQ) measuring at a rate of 50 kHz.

- Mount Zaber A-BAR200BPC linear actuator below master
cylinder and form a connection through a connecting rod.
The size of the actuator was determined by measuring the
master cylinder pulling force required to cause the roller to
lock during 80% engine load.

![Mount1](https://i.imgur.com/M12uKFi.png){: .img-responsive }

- Mount Zaber T-NA08A50 linear actuator behind engine
throttle body and form a connection to the throttle butterfly
valve through a cable. The size of the actuator was
determined by measuring the throttle cable pulling force
required to open the throttle valve.

![Mount2](https://i.imgur.com/mz48HTg.png){: .img-responsive }

![FullBreak](https://i.imgur.com/6J5fplK.png){: .img-responsive }

#### Automated Braking System Programming:
To test vehicle engine torque in a steady state environment, engine speed must be held constant. To do this, the linear actuator
was programmed to adjust braking pressure through a Proportional Integral Derivative (PID) feedback loop. The feedback in
the system comes in the form of roller rotational speed, which is measured by the optical encoder. The torque transducer
measures the torque applied to the brake. In a steady state test, the applied braking torque is equal to the applied vehicle
torque, allowing for an engine torque measurement to be taken at a certain RPM.

![PIDFLOW](https://i.imgur.com/z0jgKCH.png){: .img-responsive }

![LABPID](https://i.imgur.com/l65dtJh.png){: .img-responsive }

#### Automated Throttle Control Programming:
To ensure repeatability in our engine testing, throttle position throughout tests had to be automated. For this, we used the TNA08A50
linear actuator being controlled through a PI feedback loop. Technically, this system did require the use of a
feedback loop, since it would have been possible to directly relate actuator position to throttle position. However, this approach
would not have taken into account slight changes in position from remounting of the actuator. Therefore, a feedback loop was
determined to be the best option. The feedback in the system comes in the form of potentiometer voltage. The program relates
this voltage to the target throttle position and adjusts accordingly. Additionally, this throttle system allows for us to tune
through repeatable transient tests, which is closer to what the engine would experience in competition.

![PIFLOW](https://i.imgur.com/iFPBi9m.png){: .img-responsive }

![LABPI](https://i.imgur.com/St2U693.png){: .img-responsive }

### Results:
From February to April 2018, significant engine testing was conducted on the dynamometer. The breaking system, roller
mechanism, and torque data acquisition performed well. Through repeated tests, spark ignition angle and fuel factor were
tuned to maximize the engine torque and power output. This tuning helped the team to achieve 960 mpg at the shell eco
marathon, an 84% increase over the previous years result. None of this would be possible without the support of Zaber Technologies.
