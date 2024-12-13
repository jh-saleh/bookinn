import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'root-page',
  standalone: true,
  imports: [],
  templateUrl: './root-page.component.html',
  styleUrl: './root-page.component.css'
})
export class RootPageComponent implements AfterViewInit {
  readonly portfolioURL: string = environment.portfolioURL;
  readonly droplets: number = 50;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    let tl1 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#section1",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=950%",
        onLeave: () => {
          window.location.href = "/home";
        }
      }
    });
    tl1.fromTo(".bookinn",
      { xPercent: 0, x: "center" },
      {
        xPercent: 50,
        scrollTrigger: {
          start: "0% top",
          end: "+=100%",
          scrub: 1,
        }
      }).fromTo(".o1", { opacity: 1 }, {
        opacity: 0, scrollTrigger: {
          end: "100%",
          scrub: 1
        }
      }).fromTo(".o2", { opacity: 1 }, {
        opacity: 0, scrollTrigger: {
          end: "80%",
          scrub: 1
        }
      }).fromTo(".k", { opacity: 1 }, {
        opacity: 0, scrollTrigger: {
          end: "60%",
          scrub: 1
        }
      }).fromTo(".I", { opacity: 1 }, {
        opacity: 0, scrollTrigger: {
          end: "40%",
          scrub: 1
        }
      }).fromTo(".n1", { opacity: 1 }, {
        opacity: 0, scrollTrigger: {
          end: "20%",
          scrub: 1
        }
      }).fromTo(".n2", { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
          end: "15%",
          scrub: 1,
        }
      });

    tl1.to(".b-bar", {
      scale: 10,
      rotateZ: "55deg",
      xPercent: -5000,
      yPercent: -300,
      display: "none",
      scrollTrigger: {
        start: "150% top",
        end: "+=100%",
        scrub: 1,
      },
    })

    tl1.fromTo(".b-small-circle", {
      scale: 1,
    }, {
      scale: 10,
      rotateZ: "-60deg",
      xPercent: 2000,
      yPercent: -900,
      display: "none",
      scrollTrigger: {
        start: "150% top",
        end: "+=100%",
        scrub: 1,
      },
    })

    tl1.fromTo(".b-big-circle", {
      scale: 1,
    }, {
      scale: 10,
      rotateZ: "180deg",
      xPercent: 700,
      yPercent: 1250,
      display: "none",
      scrollTrigger: {
        start: "150% top",
        end: "+=100%",
        scrub: 1,
      },
    });

    tl1.fromTo(".pitch", {
      opacity: 0,
      scale: 1,
    }, {
      opacity: 1,
      scale: 2,
      scrollTrigger: {
        start: "170% top",
        end: "+=100%",
        scrub: 1,
      }
    }).to(".pitch", {
      opacity: 0,
      scrollTrigger: {
        start: "300% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo(".author", {
      opacity: 0,
      display: "none"
    }, {
      opacity: 1,
      display: "grid",
      scrollTrigger: {
        start: "700% top",
        end: "+=10%",
        scrub: 1,
      }
    }).to(".author", {
      opacity: 0,
      scrollTrigger: {
        start: "1000% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo(".home-button", {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        start: "0% top",
        end: "+=10%",
        scrub: 1,
      }
    });


    // ################################################### DROP
    tl1.fromTo("#drop1", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -20,
      xPercent: 5000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 150,
      xPercent: 5000,
      scrollTrigger: {
        start: "450% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop1", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop2", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: 10,
      xPercent: 70000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 500,
      xPercent: 70000,
      scrollTrigger: {
        start: "500% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop2", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop3", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: 50,
      xPercent: 50000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 300,
      xPercent: 50000,
      scrollTrigger: {
        start: "550% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop3", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop4", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 90000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 150,
      xPercent: 90000,
      scrollTrigger: {
        start: "550% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop4", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop5", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -20,
      xPercent: 20000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 550,
      xPercent: 20000,
      scrollTrigger: {
        start: "600% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop5", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop6", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -20,
      xPercent: 30000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 200,
      xPercent: 30000,
      scrollTrigger: {
        start: "600% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop6", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop7", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 60000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 60,
      xPercent: 60000,
      scrollTrigger: {
        start: "600% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop7", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    // ################################################### EVERY OTHER DROPS

    tl1.fromTo("#drop8", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 15000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 30,
      xPercent: 15000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop8", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });


    tl1.fromTo("#drop9", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 35000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 450,
      xPercent: 35000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop9", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop10", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 10000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 350,
      xPercent: 10000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop10", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop11", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 85000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 400,
      xPercent: 85000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop11", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop12", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 75000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 200,
      xPercent: 75000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop12", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop13", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 55000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 480,
      xPercent: 55000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop13", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop14", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 40000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 20,
      xPercent: 40000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop14", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop15", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 20000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 300,
      xPercent: 20000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop15", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop16", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 65000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 260,
      xPercent: 65000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop16", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop17", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 80000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 70,
      xPercent: 80000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop17", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop18", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 80000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 70,
      xPercent: 80000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop18", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop19", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 50000,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 130,
      xPercent: 50000,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop19", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });

    tl1.fromTo("#drop20", {
      position: "absolute",
      opacity: 0,
      scale: 0.8,
      yPercent: -10,
      xPercent: 1800,
    }, {
      opacity: 1,
      scale: 1,
      yPercent: 420,
      xPercent: 1800,
      scrollTrigger: {
        start: "650% top",
        end: "+=50%",
        scrub: 1,
      }
    }).to("#drop20", {
      yPercent: 1253,
      opacity: 0,
      scrollTrigger: {
        start: "870% top",
        end: "+=100%",
        scrub: 1,
      }
    });
  }
}
