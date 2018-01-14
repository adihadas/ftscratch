window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-111419028-1', 'auto');
ga('send', 'pageview');

function getButtonState(state) {
	return Lang.get(state);
}

function getLightBarrierState(state) {
	return Lang.get(state);
}


var Lang = {
	
	// browser's language code - no need as this is the hebrew version
	//langCode: (navigator.language || navigator.userLanguage).substr(0,2),
	
	trans: {
		// English translation
		en: {
			onOpenClose: 'If %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'If counter %m.counters %m.compares %n',
			onInput: 'If value of %m.inputSensors %m.inputs %m.compares %n',
			isClosed: 'Is %m.openCloseSensors %m.inputs closed?',
			getCounter: 'Read value of counter %m.counters',
			getSensor: 'Read value of %m.inputSensors %m.inputs',
			doPlaySound: 'Play sound %n',
			doPlaySoundWait: 'Play and maintain sound %n',
			doSetLamp: 'Set lamp %m.outputs to %n',
			//doSetOutput: 'Set output %m.outputs to %n',
			doResetCounter: 'Reset counter %m.counters',
			doSetMotorSpeed: 'Set motor %m.motors to %n',
			doSetMotorSpeedDir: 'Set motor %m.motors to %n %m.motorDirections',
			doSetMotorDir: 'Set motor %m.motors to %m.motorDirections',
			doSetMotorSpeedDirDist: 'Move motor %m.motors by %n steps with %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'Move motor %m.motors %m.motorDirections and %m.motors %m.motorDirections with %n ',
			doSetMotorSpeedDirDistSync: 'Move motor %m.motors %m.motorDirections and %m.motors %m.motorDirections with %n by %n steps',
			doStopMotor: 'Stop motor %m.stopmotors',
			doConfigureInput: 'Set input %m.inputs to %m.inputModes',
			dir_forward: 'forward',
			dir_backwards: 'back',
			all: 'All',
			sens_color: 'Colour sensor',
			sens_distance: 'Distance sensor',
			sens_ntc: 'NTC resistance',
			sens_photo: 'Photo resistance',
			sens_lightBarrier: 'Light barrier',
			sens_button: 'Switch',
			sens_reed: 'Reed contact',
			sens_IR: 'Trail Sensor',
			openclose_opens: 'opens',
			openclose_closes: 'closes',
			mode_a5k: 'Analogue resistance',
			mode_d5k: 'Digital resistance',
			mode_a10v: 'Analogue voltage',
			mode_d10v: 'Digital voltage',
			mode_ultrasonic: 'Ultrasound',
			reset: 'reset'
		},
		// Arabic translation
		ar: {
			onOpenClose: 'اذا- %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'اذا -كانت قيمة العداد- %m.counters %m.compares %n',
			onInput: 'اذا- -كانت قيمة- %m.inputSensors %n %m.compares %m.inputs',
			isClosed: 'هل- %m.openCloseSensors %m.inputs مغلق-',
			getCounter: 'اقرأ- قيمة- العداد- %m.counters',
			getSensor: 'اقرأ -قيمة -ال- %m.inputSensors %m.inputs',
			doPlaySound: 'أسمع -النغمة- %n',
			doPlaySoundWait: 'أسمع -نغمة -حتى -نهايتها- %n',
			doSetLamp: 'أضئ -المصباح- %m.outputs بقوة -سطوع- %n',
			doResetCounter: 'قم -بتصفير -العداد- %m.counters',
			doSetMotorSpeed: 'شغل -المحرك-  %m.motors  بسرعة- %n',
			doSetMotorSpeedDir: 'شغل -المحرك- %m.motors بسرعة- %n %m.motorDirections',
			doSetMotorDir:  'حدد -جهة -المحرك- %m.motors ل %m.motorDirections',
			doSetMotorSpeedDirDist: 'شغل -المحرك- %m.motors لمسافة- %n خطو-ات -بسرعة-  %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'شغل -المحركات- %m.motors %m.motorDirections وأيضا- %m.motors %m.motorDirections  -بالسرعة- %n',
			doSetMotorSpeedDirDistSync: 'شغل -المحركات- %m.motors %m.motorDirections وأيضا- %m.motors %m.motorDirections لمسافة- %n خطوات- -بسرعة-  %n',
			doStopMotor: 'أوقف- -المحرك- %m.stopmotors',
			doConfigureInput: 'حدد نوع -المُدخَل- %m.inputs  ل %m.inputModes',
			dir_forward: 'الى -الأمام',
			dir_backwards: 'الى -الخلف-',
			all: 'الكل-',
			sens_color: 'مجس -اللون-',
			sens_distance: 'مجس -المسافة-',
			sens_ntc: 'مجس -الحرارة-',
			sens_photo: 'مجس -الضوء-',
			sens_lightBarrier: 'حاجز- -الضوء-',
			sens_button: 'مفتاح-',
			sens_reed: 'مجس -الحقل -المغناطيسي--',
			sens_IR: 'مجس -الأشعة -تحت -الحمراء--',
			openclose_opens: 'يُفتح-',
			openclose_closes: 'يُغلق-',
			mode_a5k: 'مقاومة- -تناظرية-',
			mode_d5k: 'مقاومة -رقمية-',
			mode_a10v: 'جهد -تناظري-',
			mode_d10v: 'جهد -رقمي-',
			mode_ultrasonic: 'فوق -صوتي-',
			reset: 'تصفير-'
		},
		// Hebrew translation
		he: {
			onOpenClose: 'כאשר %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'כאשר ערכו של מונה %n %m.compares %m.counters',
			onInput: 'כאשר ערכו של %m.inputSensors %n %m.compares %m.inputs',
			isClosed: 'האם %m.openCloseSensors %m.inputs סגור',
			getCounter: 'קרא ערכו של מונה %m.counters',
			getSensor: 'קרא ערכו של %m.inputSensors %m.inputs',
			doPlaySound: 'נגן צליל %n',
			doPlaySoundWait: 'נגן צליל %n עד לסיומו',
			doSetLamp: 'הפעל נורה %m.outputs בעוצמת הארה %n',
			//doSetOutput: 'הגדר פלט %m.outputs לעוצמה %n',
			doResetCounter: 'אפס מונה %m.counters',
			doSetMotorSpeed: 'הפעל מנוע %m.motors במהירות %n',
			doSetMotorSpeedDir: 'הפעל מנוע %m.motors במהירות %n %m.motorDirections',
			doSetMotorDir: 'קבע כיוון מנוע %m.motors ל %m.motorDirections',
			doSetMotorSpeedDirDist: 'הפעל מנוע %m.motors למרחק %n צעדים במהירות %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'הפעל מנועים %m.motors %m.motorDirections וגם %m.motors %m.motorDirections במהירות %n',
			doSetMotorSpeedDirDistSync: 'הפעל מנועים %m.motors %m.motorDirections וגם %m.motors %m.motorDirections למרחק %n צעדים במהירות %n',
			doStopMotor: 'עצור מנוע %m.stopmotors',
			doConfigureInput: 'הגדר סוג קלט %m.inputs ל %m.inputModes',
			dir_forward: 'קדימה',
			dir_backwards: 'אחורה',
			all: 'הכל',
			sens_color: 'חיישן צבע',
			sens_distance: 'חיישן מרחק',
			sens_ntc: 'חיישן טמפרטורה',
			sens_photo: 'חיישן אור',
			sens_lightBarrier: 'מחסום אור',
			sens_button: 'מתג',
			sens_reed: 'חיישן מגנטיות',
			sens_IR: 'חיישן מסלול',
			openclose_opens: 'נפתח',
			openclose_closes: 'נסגר',
			mode_a5k: 'התנגדות אנלוגית',
			mode_d5k: 'התנגדות דיגיטלית',
			mode_a10v: 'מתח אנלוגי',
			mode_d10v: 'מתח דיגיטלי',
			mode_ultrasonic: 'אולטרהסוניק',
			reset: 'איפוס'
		}		
	},	
	
	// get the hebrew translated version
	get: function(what) {
		//var codes = this.trans[this.langCode];		// requested language
		//if (!codes) { 
		codes = this.trans['en']; 
		//}	// fallback
		return codes[what];
	},
	
	getSensor: function(name) {
		return this.get('sens_' + name);
	},
	
	getMotorDir: function(dir) {
		return this.get('dir_' + dir);
	},
	
	getOpenClose: function(dir) {
		return this.get('openclose_' + dir);
	},
	
	getMode: function(mode) {
		return this.get('mode_' + mode);
	},
	getAll: function() {
		return this.get('all');
	}
};

function ScratchConnection(url, ext) {
		
	var ws = null;
	
	// for access within methods
	var _this = this;
	var connected = false;
	var curDev = null;
	
	this.status = {status: 1, msg: 'Connecting'};
	
	// get the current time as string
	var getTimeString = function() {
		var d = new Date();
		var h = d.getHours();	h = (h<10) ? ('0'+h) : (h);
		var m = d.getMinutes();	m = (m<10) ? ('0'+m) : (m);
		var s = d.getSeconds();	s = (s<10) ? ('0'+s) : (s);
		return '(' + h + ':' + m + ':' + s + ') ';
	}
	
	this.connect = function() {
		ws = new WebSocket(url);
		if (ws == null) {
			alert('Your Browser does not support WebSockets. You need a recent Browser to use FTScratchTXT. הדפדפן אינו תומך בטכנולוגיה הנדרשת, נא להשתמש בכרום או בפיירפוקס או באקספלורר.');
			return;
		}
		ws.onmessage = handleMessage;
		ws.onclose = handleClose;
		ws.onopen = handleOpen;
	}
	
	this.close = function() {
		ws.close();
	}
	
	// websocket connected. this == the websocket
	var handleOpen = function() {
		_this.connected = true;
		ext.onConnect();
	}
	
	// new websocket message. this == the websocket
	var handleMessage = function(message) {
		
		var messageType = message.data.substring(0, 4);
		var messageData = message.data.substring(4);
		var data = (messageData) ? (JSON.parse(messageData)) : null;
				
		if (messageType === "SENS") {
			ext.input.oldValues = ext.input.curValues;
			ext.input.curValues = data;
			ext.onNewInputs();
		} else if (messageType === "SDON") {
			ext.onSoundDone();
		} else if (messageType == "PONG") {
			ext.onPong();
			var dev = data[0];
			var devChanged = dev != _this.curDev;
			_this.curDev = dev;
			if (dev) {
				if (devChanged) {
					ext.onConnectTXT();
				}
				_this.status = {status: 2, msg: getTimeString() + ' connected to ' + dev };
			} else {
				_this.status = {status: 1, msg: getTimeString() + ' הרובוט כבוי או מנותק מהמחשב' };
			}
			
		}
		
	};

	// websocket closed. this == the websocket
	var handleClose = function() {
		_this.status = {status: 0, msg: getTimeString() + ' נפלה התקשורת עם תוכנת הקישור'};
		if (_this.connected) {
			alert('נפלה התקשורת עם תוכנת הקישור. נא לוודא שהתוכנה רצה ברקע ולטעון מחדש את סביבת הדפדפן');
		} else {
			alert('לא ניתן היה להתחבר אל הרובוט. נא לוודא שתוכנת הקישור רצה ברקע ולטעון מחדש את סביבת הדפדפן');
		}
		_this.connected = false;
	};
	
	this.playSound = function(sndIdx) {
		this.send("PLAY", {idx: sndIdx});
	};
	

	
	this.ping = function() {
		ws.send("PING");
	}
	
	this.reset = function() {
		ws.send("RSET");
	}
	
	/** send CMD+json*/
	this.send = function(cmd, obj) {
		ws.send(cmd + JSON.stringify(obj));
	}
	
	
	
};

/*
var IO = {

	// the URL of the host application interfacing the ROBO-LT
	host: 'http://localhost:8000/',
	
	// the latest result of updateStatus()
	status: {status: 1, msg: 'Connecting'},
	
	// request timeout after x msec
	timeout: 500,


	// get the current time as string
	getTimeString: function() {
		var d = new Date();
		var h = d.getHours();	h = (h<10) ? ('0'+h) : (h);
		var m = d.getMinutes();	m = (m<10) ? ('0'+m) : (m);
		var s = d.getSeconds();	s = (s<10) ? ('0'+s) : (s);
		return '(' + h + ':' + m + ':' + s + ') ';
	},

	// ping the host application
	updateStatus: function() {
		try {
			var time = this.getTimeString();
			var self = this;
			this.doGet('status')
				.done( function(dev)	{self.status = {status: 2, msg: time + dev[0]};} )							// app responded
				.fail( function()		{self.status = {status: 0, msg: time + 'Application not responding'};} );	// app did not respond within timeout
		} catch (err) {return {status: 1, msg: 'Connecting'};}
		return this.status;
	},


	// POST the given command and corresponding values to the host application
	doPost: function(command, values) {
		var json = JSON.stringify(values);
		this.doPostJson(command, json);
	},
	doPostJson: function(command, json) {
		return $.ajax({
              async: false,					// seems a lot more stable in scratch
			  url: this.host + command,
              dataType: 'json',
			  method: 'POST',
			  data: json,
			  crossDomain: true,
        });
	},
	
	// GET the given command and return the response data from the host application
	doGet: function(command) {
		return $.ajax({
              async: true,
			  timeout: this.timeout,
			  url: this.host + command,
              dataType: 'json',
			  method: 'GET',
			  crossDomain: true,
        });
	},


	
};
	*/

(function(ext) {
	
	// the current sensor values from the device
	ext.currentValues = null;
	
	// the previous values from the device (for change detection)
	ext.oldValues = null;
		
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {
		connection.close();
	};
	
	// react to ScratchX stop button/event
	ext._stop = function () {
	        ext.reset();
	};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
	try {
		connection.ping();
	} catch (err) {
		;    // not yet connected. no problem
   	}
		return connection.status;
	};
	
	// reset the device
	ext.reset = function() {
		connection.reset();
		ext.output.init();
	};
	
	
	// describes one motor (speed, direction, distance, sync)
	function Motor() {
		this.mod = false;		// motor was changed?
		this.speed = 0;
		this.dir = 1;			// -1 (back), 0 (stop), 1 (forward)
		this.sync = -10;		// -10 = no change, -1 = no-sync, [0-3] = sync with M1-M4
		this.dist = -10;		// -10 = no change, 0 = no distance limit, >0 = distance limit
		this.modified =			function() {this.mod = true;}
		this.transmitted =		function() {this.mod = false; this.sync = -10; this.dist = -10;}
		this.init =				function() {this.speed = 0; this.dir = 1; this.sync = -10; this.dist = -10;}
	};
	
	// describes one output (value)
	function Output() {
		this.mod = false;		// output was changed?
		this.val = 0;
		this.modified =			function() {this.mod = true;}
		this.transmitted =		function() {this.mod = false;}
		this.init = 			function() {this.val = 0;}
	};
	
	// describes one input-configuration (mode)
	function Input() {
		this.mod = false;		// input was changed?
		this.mode = -1;			// start with "unknown"
		this.setMode = function(newMode) {
			var changed = this.mode != newMode;
			this.mode = newMode;
			if (changed) {this.mod = true;}
			//console.log(this.mode + ":" + newMode + ":" + changed + " - " + this.mod);
		}
		this.transmitted = 	function() {this.mod = false;}
		this.init =			function() {this.mode = -1;}
	};
	
	// describes one counter-configuration
	function Counter() {
		this.mod = false;
		this.rst = false;
		this.doReset =		function() {this.rst = true; this.mod = true;}
		this.transmitted =	function() {this.mod = false;}
		this.init =			function() {this.rst = false;}
	}
	
	Motor.prototype.toString = function motorToString() {
		return "speed: " + this.speed + " dir: " + this.dir + " sync:" + this.syncWith + " dist:" + this.distance;
	};
	
	// describes the current state
	ext.output = {
		
		// outgoing state
		motors:		[new Motor(), new Motor(), new Motor(), new Motor()],
		outputs:	[new Output(), new Output(), new Output(), new Output(), new Output(), new Output(), new Output(), new Output()],
		inputs:		[new Input(), new Input(), new Input(), new Input(), new Input(), new Input(), new Input(), new Input()],
		counters:	[new Counter(), new Counter(), new Counter(), new Counter()],
		
		// mark the outgoing state as "transmitted"
		transmitted: function() {
			for (var i = 0; i < 4; ++i) {this.motors[i].transmitted();}
			for (var i = 0; i < 8; ++i) {this.outputs[i].transmitted();}
			for (var i = 0; i < 8; ++i) {this.inputs[i].transmitted();}
			for (var i = 0; i < 4; ++i) {this.counters[i].transmitted();}
		},
		
		needsUpdate: function() {
			var needsUpdate = false;
			for (var i = 0; i < 4; ++i) {needsUpdate |= this.motors[i].mod;}
			for (var i = 0; i < 8; ++i) {needsUpdate |= this.outputs[i].mod;}
			for (var i = 0; i < 8; ++i) {needsUpdate |= this.inputs[i].mod;}
			for (var i = 0; i < 4; ++i) {needsUpdate |= this.counters[i].mod;}
			return needsUpdate;
		},
		
		// reset to initial state
		init: function() {
			for (var i = 0; i < 4; ++i) {this.motors[i].init();}
			for (var i = 0; i < 8; ++i) {this.outputs[i].init();}
			for (var i = 0; i < 8; ++i) {this.inputs[i].init();}
			for (var i = 0; i < 4; ++i) {this.counters[i].init();}
		},
		
	};
	
	// received state
	ext.input = {
		curValues:	{},
		oldValues:	{},
	}
	
	// convert Output name to array index: '04' -> 3
	ext._outputNameToIdx = function(outputName) {
		return outputName[1] - 1;
	};
	
	// convert Input name to array index: 'I4' -> 3
	ext._inputNameToIdx = function(inputName) {
		return inputName[1] - 1;
	};
	
	// convert Motor name to array index: 'M4' -> 3
	ext._motorNameToIdx = function(motorName) {
		return motorName[1] - 1;
	};
	
	// convert counter-name to array index: 'C4' -> 3
	ext._counterNameToIdx = function(counterName) {
		return counterName[1] - 1;
	};
	
	// convert direction-name to value 'backward' -> -100
	ext._dirNameToValue = function(dirName) {
		if (dirName == Lang.getMotorDir('forward'))		{return +1;}
		if (dirName == Lang.getMotorDir('backwards'))	{return -1;}
	};
	
	// convert input-mode to value 'd10v' -> 0
	ext._inputModeToIdx = function(inputMode) {
		//console.log(inputMode);
		if (inputMode == Lang.getMode('d10v'))			{return 0;}
		if (inputMode == Lang.getMode('d5k'))			{return 1;}
		if (inputMode == Lang.getMode('a10v'))			{return 2;}
		if (inputMode == Lang.getMode('a5k'))			{return 3;}
		if (inputMode == Lang.getMode('ultrasonic'))	{return 4;}
		//console.log("err");
	};
	
	
	// set the given Output 'Ox' to the provided value [0:8];
	ext._setOutput08 = function(outputName, value) {
		var idx = ext._outputNameToIdx(outputName);
		var val = value * 100 / 8;						// [0:8] -> [0:100];
		ext.output.outputs[idx].val = Math.round(val);	// ensure integer
		ext.output.outputs[idx].modified();
		//alert("set output " + val);
	};
	
	// set the given Motor 'Mx' speed [0:8]
	ext._setMotorSpeed08 = function(motorName, speed) {
		var idx = ext._motorNameToIdx(motorName);
		var val = speed * 100 / 8;						// [0:8] -> [0:100];
		ext.output.motors[idx].speed = Math.round(val);	// ensure integer
		ext.output.motors[idx].modified();
	};
	
	// set the given Motor 'Mx' direction
	ext._setMotorDir = function(motorName, dirName) {
		var idx = ext._motorNameToIdx(motorName);
		var dir = ext._dirNameToValue(dirName);
		ext.output.motors[idx].dir = dir;
		ext.output.motors[idx].modified();
	};
	
	// set the given Motor 'Mx' number of steps
	ext._setMotorDist = function(motorName, steps) {
		var idx = ext._motorNameToIdx(motorName);
		ext.output.motors[idx].dist = steps;
		ext.output.motors[idx].modified();
	};
	
	// let motor2 run in sync with motor1
	ext._setMotorSync = function(motor1Name, motor2Name) {
		var idx1 = ext._motorNameToIdx(motor1Name);
		var idx2 = ext._motorNameToIdx(motor2Name);
		ext.output.motors[idx1].sync = idx2;
		ext.output.motors[idx1].modified();
	};
	
	// let the given motor run unsynced
	ext._setMotorSyncNone = function(motorName) {
		var idx = ext._motorNameToIdx(motorName);
		ext.output.motors[idx].sync = -1;
		ext.output.motors[idx].modified();
	};
	
	// set the given Input's mode: 0=DIGITAL_10V, 1=DIGITAL_5KOHM, 2=ANALOG_10V, 3=ANALOG_5KOHM, 4=ULTRASONIC
	ext._setSensorMode = function(inputName, mode) {
		var idx = ext._inputNameToIdx(inputName);
		ext.output.inputs[idx].setMode(mode);
		//console.log("set input " + inputName + " to " + mode);
	};
	
	// set the given input's mode according to the given type
	ext._adjustInputModeAnalog = function(inputName, sensorType) {
		//console.log("configuring " + inputName + " for analog " + sensorType);
		if		(sensorType === Lang.getSensor('color'))		{ext._setSensorMode(inputName, 2);}		// ANALOG_10V
		else if	(sensorType === Lang.getSensor('distance'))		{ext._setSensorMode(inputName, 4);}		// ultrasonic
		else if	(sensorType === Lang.getSensor('ntc'))			{ext._setSensorMode(inputName, 3);}		// ANALOG_5K
		else if	(sensorType === Lang.getSensor('photo'))		{ext._setSensorMode(inputName, 3);}		// ANALOG_5K
		else													{alert("unsupported sensor type");}
	};
	
	// set the given input's mode according to the given type
	ext._adjustInputModeDigital = function(inputName, sensorType) {
		//console.log("configuring " + inputName + " for digital " + sensorType);
		if		(sensorType === Lang.getSensor('button'))		{ext._setSensorMode(inputName, 1);}		// DIGITAL_5KOHM
		else if	(sensorType === Lang.getSensor('reed'))			{ext._setSensorMode(inputName, 1);}		// DIGITAL_5KOHM
		else if	(sensorType === Lang.getSensor('lightBarrier'))	{ext._setSensorMode(inputName, 1);}		// DIGITAL_5KOHM
		else if	(sensorType === Lang.getSensor('IR'))	{ext._setSensorMode(inputName, 0);}		// DIGITAL_10V
		else													{alert("unsupported sensor type");}
	};
		
	

	ext.updateIfNeeded = function() {
		if (ext.output.needsUpdate()) {
			connection.send("ACTU", ext.output);
			ext.output.transmitted();
		}
	};
	
	/** txt finished playing a sound */
	ext.onSoundDone = function() {
		if (ext.soundCallback) {
			ext.soundCallback();
			ext.soundCallback = null;
		}
	};

    	ext.waitForMotor = [];
    
	/** input values have changed */
	ext.onNewInputs = function() {
	ext.checkCallbacks();
	};
    
	/** ping/pong between scratch and app */
	ext.onPong = function() {
	ext.checkCallbacks();
	}
    	
	/** check callbacks for some blocks whether they are hit */
	ext.checkCallbacks = function() {
		for (var idx in ext.waitForMotor) {
			var func = ext.waitForMotor[idx];
			var res = func();
			if (res) {
				//console.log("remove");
				ext.waitForMotor.splice(idx, 1);
			}
		}       
	};	


	/** commands */
	
	
	
	/** play the given sound */
	ext.doPlaySound = function(sndIdx) {
		connection.playSound(sndIdx);
	};
	
	/** play the given sound and call the callback as soon as it finished */
	ext.doPlaySoundWait = function(sndIdx, callback) {
		// prevent blocking 2 sound-blocks at the same time
		if (ext.soundCallback) {
			callback();
			return;
		}
		// remember the callback (see onSoundDone())
		ext.soundCallback = callback;
		connection.playSound(sndIdx);
	};
	
	/** set the lamp at the given output to the provided value [0:8] */
	ext.doSetLamp = function(outputName, value) {
		ext._setOutput08(outputName, value);
		ext.updateIfNeeded();
	};
	
	/** set the given Output 'Ox' to the provided value [0:8] */
	ext.doSetOutput = function(outputName, value) {
		ext._setOutput08(outputName, value);
		ext.updateIfNeeded();
	};
	
	
	/** adjust the given motor's speed */
	ext.doSetMotorSpeed = function(motorName, value) {
		ext._setMotorSpeed08(motorName, value);
		ext.updateIfNeeded();
	};
	
	/** adjust the given motor's direction */
	ext.doSetMotorDir = function(motorName, dirName) {
		ext._setMotorDir(motorName, dirName);
		ext.updateIfNeeded();
	};
	
	
	/** adjust the given motor's speed and direction */
	ext.doSetMotorSpeedDir = function(motorName, value, dirName) {
		ext._setMotorDir(motorName, dirName);
		ext._setMotorSpeed08(motorName, value);
		ext.updateIfNeeded();
	};
	
	/** let the given motor move "steps" steps into the given direction with the provided speed */
	ext.doSetMotorSpeedDirDist = function(motorName, steps, value, dirName, callback) {
                
		ext._setMotorSyncNone(motorName);               // remove sync
		ext._setMotorDist(motorName, steps);
		ext._setMotorDir(motorName, dirName);
		ext._setMotorSpeed08(motorName, value);
		ext.updateIfNeeded();
        
 		// register a function that will be checked for every input check.
		// if the counters reached a certain level, call the blocking callback
		var motorIdx = ext._motorNameToIdx(motorName);
		var check = function() {
			//console.log("check motor " + motorIdx + " >= " + steps);
			var c1 = ext.input.oldValues.counters[motorIdx];
			var c2 = ext.input.curValues.counters[motorIdx];
			if (c2 >= steps) {
				//if (c1 < c2) {
				callback(); return true;
				//}
			}
			return false;
		}
        
		window.setTimeout(
			function(){ ext.waitForMotor.push(check); },
			200
		);      
        
	};
	
	/** synchronize the two given motors */	
	ext.doSetMotorSpeedDirSync = function(motor1Name, dir1Name, motor2Name, dir2Name, speed) {
        		if (motor1Name == motor2Name) {return;}
        
		ext._setMotorDist(motor1Name, 0);               // remove distance limits
		ext._setMotorDist(motor2Name, 0);               // remove distance limits
		ext._setMotorSync(motor1Name, motor2Name);      // sync both motors (same speed)
		ext._setMotorDir(motor1Name, dir1Name);
		ext._setMotorDir(motor2Name, dir2Name);
		ext._setMotorSpeed08(motor1Name, speed);
		ext._setMotorSpeed08(motor2Name, speed);
		ext.updateIfNeeded();
	};
	
	/** synchronize the two given motors with distance */
	    ext.doSetMotorSpeedDirDistSync = function(motor1Name, dir1Name, motor2Name, dir2Name, steps, speed, callback) {
        		if (motor1Name == motor2Name) {callback(); return;}
    
		ext._setMotorSync(motor1Name, motor2Name);
		ext._setMotorDist(motor1Name, steps);
		ext._setMotorDist(motor2Name, steps);
		ext._setMotorDir(motor1Name, dir1Name);
		ext._setMotorDir(motor2Name, dir2Name);
		ext._setMotorSpeed08(motor1Name, speed);
		ext._setMotorSpeed08(motor2Name, speed);
		ext.updateIfNeeded();
        
		// register a function that will be checked for every input check.
		// if the counters reached a certain level, call the blocking callback
		var motorIdx = ext._motorNameToIdx(motor1Name);
		var check = function() {
			//console.log("check motor " + motorIdx + " >= " + steps);
			var c1 = ext.input.oldValues.counters[motorIdx];
			var c2 = ext.input.curValues.counters[motorIdx];
			if (c2 >= steps) {
				//if (c1 < c2) {
					callback(); return true;
				//}
			}
			return false;
		}
        	
		window.setTimeout(
			function(){ ext.waitForMotor.push(check); },
			200
		);      
        
	};
	
		
	/** stop the given motor */
	ext.doStopMotor = function(motorName) {
		if (motorName === Lang.getAll()) {
		/** stop all motors [remove distance and sync constraints] */
			ext._setMotorSpeed08('M1', 0);      // set speed to 0
			ext._setMotorDist('M1', 0);     // remove distance limits
			ext._setMotorSyncNone('M1');      // remove sync constraints
			ext._setMotorSpeed08('M2', 0);      // set speed to 0
			ext._setMotorDist('M2', 0);     // remove distance limits
			ext._setMotorSyncNone('M2');      // remove sync constraints
			ext._setMotorSpeed08('M3', 0);      // set speed to 0
			ext._setMotorDist('M3', 0);     // remove distance limits
			ext._setMotorSyncNone('M3');      // remove sync constraints
			ext._setMotorSpeed08('M4', 0);      // set speed to 0
			ext._setMotorDist('M4', 0);     // remove distance limits
			ext._setMotorSyncNone('M4');      // remove sync constraints
			ext.updateIfNeeded();
		}
		else { 
			ext._setMotorSpeed08(motorName, 0);     // set speed to 0
			//ext._setMotorDist(motorName, 0);        // remove distance limits
			//ext._setMotorSyncNone(motorName);     // remove sync constraints
			ext.updateIfNeeded();
		}
	};
    
	
	/** reset the given counter to zero */
	ext.doResetCounter = function(counterName) {
		var idx = ext._counterNameToIdx(counterName);
		ext.output.counters[idx].doReset();
		ext.updateIfNeeded();
	};
	
	/** expert config: input -> mode */
	ext.doConfigureInput = function(inputName, inputMode) {
		if (inputMode=== Lang.getSensor('button') || inputMode=== Lang.getSensor('lightBarrier') || inputMode=== Lang.getSensor('reed')) {var idx = ext._inputModeToIdx(Lang.getMode('d5k'));} 
		else if (inputMode=== Lang.getSensor('IR')) {var idx = ext._inputModeToIdx(Lang.getMode('d10v'));} 
		else if (inputMode=== Lang.getSensor('ntc') || inputMode=== Lang.getSensor('photo')) {var idx = ext._inputModeToIdx(Lang.getMode('a5k'));} 
		else if (inputMode=== Lang.getSensor('color')) {var idx = ext._inputModeToIdx(Lang.getMode('a10v'));} 
		else if (inputMode=== Lang.getSensor('distance')) {var idx = ext._inputModeToIdx(Lang.getMode('ultrasonic'));}
		else {alert("unsupported input type");}
		ext._setSensorMode(inputName, idx);
		ext.updateIfNeeded();
	};
		
	/** get the given counter's current value */
	ext.getCounter = function(counterName) {
		var idx = ext._counterNameToIdx(counterName);
		return ext.input.curValues.counters[idx];
	};
	
	/** get the current value for the given sensor-type connected to the provided input */
	ext.getSensor = function(sensorType, inputName) {
		
		// ensure correct (analog) working mode
		ext._adjustInputModeAnalog(inputName, sensorType);
		ext.updateIfNeeded();
		
		// get value
		var idx = ext._inputNameToIdx(inputName);
		return ext.input.curValues.inputs[idx];
		
	};
	
	/** button/lightBarrier/reed is closed */
	ext.isClosed = function(sensorType, inputName) {
		
		// ensure inputName uses the correct configuration
		ext._adjustInputModeDigital(inputName, sensorType);
		ext.updateIfNeeded();
		
		// fetch
		var idx = ext._inputNameToIdx(inputName);
		return ext.input.curValues.inputs[idx] === 1;		// TODO light barrier?
		
	};
	
	
	/** sensor X on input 'Ix' >,<,= value */
	ext.onInput = function(sensorType, value, operator, inputName) {
				
		// ensure correct working mode
		ext._adjustInputModeAnalog(inputName, sensorType);
		ext.updateIfNeeded();
		
		// get index
		var idx = ext._inputNameToIdx(inputName);
			
		// compare
		if (operator === '>') {
			return !(ext.input.oldValues.inputs[idx]  >  value) && (ext.input.curValues.inputs[idx]  >  value);
		} else if (operator === '<') {
			return !(ext.input.oldValues.inputs[idx]  <  value) && (ext.input.curValues.inputs[idx]  <  value);
		} else if (operator === '=') {
			return !(ext.input.oldValues.inputs[idx] === value) && (ext.input.curValues.inputs[idx] === value);
		}
		
	};
	
	/** button/light-barrier/reed opens/closes */
	ext.onOpenClose = function(sensorType, inputName, direction) {
		
		// TODO: if schalter/reed/lichtschranke all need DIGITAL_5KOHM and have the same direction effect
		// then there is no need to distinguish between those three sensor types!
		
		// ensure inputName uses the correct configuration
		//ext._setSensorMode(inputName, 1);		// DIGITAL_5KOHM
		ext._adjustInputModeDigital(inputName, sensorType);
		ext.updateIfNeeded();
		
		// check both directions
		var idx = ext._inputNameToIdx(inputName);
		if (direction === Lang.getOpenClose('opens')) {
			return ext.input.oldValues.inputs[idx] === 1 && ext.input.curValues.inputs[idx] === 0;	// TODO light barrier?
		} else if (direction === Lang.getOpenClose('closes')) {
			return ext.input.oldValues.inputs[idx] === 0 && ext.input.curValues.inputs[idx] === 1;	// TODO light barrier?
		} else {
			alert('invalid open/close mode');
		}
		
	};
	
	
	/** counter 'Cx' >,<,= value */
	ext.onCounter = function(value, operator, counterName) {
		
		var idx = ext._counterNameToIdx(counterName);
		if (operator === '>') {
			return !(ext.input.oldValues.counters[idx]  >  value) && (ext.input.curValues.counters[idx]  >  value);
		} else if (operator === '<') {
			return !(ext.input.oldValues.counters[idx]  <  value) && (ext.input.curValues.counters[idx]  <  value);
		} else if (operator === '=') {
			return !(ext.input.oldValues.counters[idx] === value) && (ext.input.curValues.counters[idx] === value);
		} else {
			alert('invalid operator');
		}
		
	};
	

	
	
	
	// Block and block menu descriptions
	var descriptor = {
		
		blocks: [
			
			// events
			['h', Lang.get('onOpenClose'),					'onOpenClose',					Lang.getSensor('button'), 'I1', Lang.getOpenClose('opens')],
			['h', Lang.get('onCounter'),					'onCounter',					0, '>', 'C1'],
			['h', Lang.get('onInput'),						'onInput',						Lang.getSensor('color'), 0, '>', 'I1'],
				
			// gets
			['r', Lang.get('getCounter'),					'getCounter',					'C1'],
			['r', Lang.get('getSensor'),					'getSensor',					Lang.getSensor('color'), 'I1'],
			
			['b', Lang.get('isClosed'),						'isClosed',						Lang.getSensor('button'), 'I1'],
			
			
			// sets
			[' ', Lang.get('doPlaySound'),					'doPlaySound',					1],
			['w', Lang.get('doPlaySoundWait'),				'doPlaySoundWait',				1],
			
			[' ', Lang.get('doSetLamp'),					'doSetLamp',					'O1', 8],
			//[' ', Lang.get('doSetOutput'),					'doSetOutput',					'O1', 8],
			[' ', Lang.get('doResetCounter'),				'doResetCounter',				'C1'],
			
			[' ', Lang.get('doSetMotorSpeed'),				'doSetMotorSpeed',				'M1', 8],
			[' ', Lang.get('doSetMotorSpeedDir'),			'doSetMotorSpeedDir',			'M1', 8, Lang.getMotorDir('forward')],			
			[' ', Lang.get('doSetMotorDir'),				'doSetMotorDir',				'M1', Lang.getMotorDir('forward')],
			
			[' ', Lang.get('doStopMotor'),					'doStopMotor',					'M1'],
			// advanced motor
			['w', Lang.get('doSetMotorSpeedDirDist'),       'doSetMotorSpeedDirDist',       'M1', 100, 8, Lang.getMotorDir('forward')],
			[' ', Lang.get('doSetMotorSpeedDirSync'),       'doSetMotorSpeedDirSync',       'M1', Lang.getMotorDir('forward'), 'M2', Lang.getMotorDir('forward'), 8],
			['w', Lang.get('doSetMotorSpeedDirDistSync'),   'doSetMotorSpeedDirDistSync',   'M1', Lang.getMotorDir('forward'), 'M2', Lang.getMotorDir('forward'), 100, 8],

			[' ', Lang.get('doConfigureInput'),				'doConfigureInput',				'I1', Lang.getSensor('button')],

			
			[' ', Lang.get('reset'),						'reset'],
			
		],
		
		menus: {
			
			compares:			['<', '>', '='],
			
			inputSensors:		[Lang.getSensor('color'), Lang.getSensor('distance'), Lang.getSensor('ntc'), Lang.getSensor('photo')],
			
			openCloseSensors:	[Lang.getSensor('button'), Lang.getSensor('reed'), Lang.getSensor('lightBarrier'), Lang.getSensor('IR')],
			openClose:			[Lang.getOpenClose('opens'), Lang.getOpenClose('closes')],
			
			inputs:				['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8'],
			//buttonStates:		[getButtonState('pressed'), getButtonState('released')],
			//lightBarrierStates:	[getLightBarrierState('opens'), getLightBarrierState('closes')],
			motors:				['M1', 'M2', 'M3', 'M4'],
			stopmotors:				['M1', 'M2', 'M3', 'M4', Lang.getAll()],
			motorDirections:	[Lang.getMotorDir('forward'), Lang.getMotorDir('backwards')],
			
			
			counters:			['C1', 'C2', 'C3', 'C4'],
			
			outputs:			['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8'],
			outputValues:		[0, 1, 2, 3, 4, 5, 6, 7, 8],
			
			inputModes:			[Lang.getSensor('button'), Lang.getSensor('reed'), Lang.getSensor('lightBarrier'), Lang.getSensor('IR'), Lang.getSensor('color'), Lang.getSensor('distance'), Lang.getSensor('ntc'), Lang.getSensor('photo')],
	
		},
		
		url: 'https://adihadas.github.io/ftscratch/',
		
	};
		
	// connected to FTScratchTXT.exe
	ext.onConnect = function() {
		
		// ensure the ROBO LT is reset
		ext.reset();
	
	};
	
	// connected to a TXT
	ext.onConnectTXT = function() {
	
		// ensure the internal state is reset as the TXT's state is also reset!
		ext.output.init();
	
	};
	
	var connection = new ScratchConnection("ws://127.0.0.1:8001/api", ext);	// edge/ie need the IP here
	connection.connect();
	
	// Register the extension
	ScratchExtensions.register('fischertechnik ROBO-TXT', descriptor, ext);

})({});

