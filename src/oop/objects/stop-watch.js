function StopWatch() {
  let running,
    timer,
    duration = 0,
    startTime,
    endTime;

  this.start = function () {
    if (running) {
      throw new Error("timer is running");
    }

    running = true;

    startTime = new Date("2020-10-21T11:57:00.667Z");

    // timer = setInterval(function () {
    //   duration++;
    // }, 1000);
  };

  this.stop = function () {
    if (!running) {
      throw new Error("timer is stopeed");
    }

    running = false;

    // clearInterval(timer);

    endTime = new Date("2020-10-21T11:59:10.667Z");

    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    this.duration = 0;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
