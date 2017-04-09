﻿
function getButtonState(state) {
	return Lang.get(state);
}

function getLightBarrierState(state) {
	return Lang.get(state);
}


var Lang = {
	
	// browser's language code
	langCode: (navigator.language || navigator.userLanguage).substr(0,2),
	
	trans: {
		
		// german translation
		de: {
			
			onOpenClose:				'Wenn %m.openCloseSensors %m.inputs %m.openClose',
			onCounter:					'Wenn Zähler %m.counters %m.compares %n',
			onInput:					'Wenn Wert von %m.inputSensors %m.inputs %m.compares %n',

			isClosed:					'%m.openCloseSensors %m.inputs geschlossen?',
			getCounter:					'Lese Wert von Zähler %m.counters',
			getSensor:					'Lese Wert von %m.inputSensors %m.inputs',
			
			doPlaySound:				'Sound %n abspielen',
			doPlaySoundWait:			'Sound %n abspielen und warten',
			
			doSetLamp:					'Setze Lampe %m.outputs auf %n',
			doSetOutput:				'Setze Ausgang %m.outputs auf %n',
			doResetCounter:				'Setze Zähler %m.counters zurück',
			
			doSetMotorSpeed:			'Setze Motor %m.motors auf %n',
			doSetMotorSpeedDir:			'Setze Motor %m.motors auf %n %m.motorDirections',
			doSetMotorDir:				'Setze Motor %m.motors auf %m.motorDirections',
			doSetMotorSpeedDirDist:		'Verfahre Motor %m.motors um %n Schritte mit %n %m.motorDirections',
			doSetMotorSpeedDirSync:		'Verfahre Motor %m.motors mit %m.motors mit %n %m.motorDirections',
			doSetMotorSpeedDirDistSync:	'Verfahre Motor %m.motors mit %m.motors um %n Schritte mit %n %m.motorDirections',
			
			doStopMotor:				'Stoppe Motor %m.motors',
			
			doConfigureInput:			'Setze Eingang %m.inputs auf %m.inputModes',
			
			dir_forward:				'vorwärts',
			dir_backwards:				'rückwärts',
			
			sens_color:					'Farbsensor',
			sens_distance:				'Abstandssensor',
			sens_ntc:					'NTC-Widerstand',
			sens_photo:					'Fotowiderstand',
			sens_lightBarrier:			'Lichtschranke',
			sens_button:				'Schalter',
			sens_reed:					'Reed-Kontakt',
			
			openclose_opens:			'öffnet',
			openclose_closes:			'schließt',
			
			mode_a5k:					'Widerstand analog',
			mode_d5k:					'Widerstand digital',
			mode_a10v:					'Spannung analog',
			mode_d10v:					'Spannung digital',
			mode_ultrasonic:			'Ultraschall',
			
			reset:						'zurücksetzen',

		},
		
		en: {
			onOpenClose: 'אם %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'אם המונה %m.counters %m.compares %n',
			onInput: 'אם ערך של %m.inputSensors %n %m.compares %m.inputs',
			isClosed: 'האם %m.openCloseSensors %m.inputs סגור',
			getCounter: 'קרא ערך מונה %m.counters',
			getSensor: 'קרא ערכו של %m.inputSensors %m.inputs',
			doPlaySound: 'נגן צליל %n',
			doPlaySoundWait: 'נגן צליל עד לסיומו %n',
			doSetLamp: 'קבע ערך נורה %m.outputs ל %n',
			doSetOutput: 'הגדר פלט %m.outputs ל %n',
			doResetCounter: 'אפס מונה %m.counters',
			doSetMotorSpeed: 'הגדר מנוע %m.motors למהירות %n',
			doSetMotorSpeedDir: 'הגדר מנוע %m.motors ל %n %m.motorDirections',
			doSetMotorDir: 'הגדר מנוע %m.motors ל %m.motorDirections',
			doSetMotorSpeedDirDist: 'הזז מנוע %m.motors ב %n צעדים ועם %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'הזז מנוע %m.motors וגם  %m.motors עם %n %m.motorDirections',
			doSetMotorSpeedDirDistSync: 'הזז מנוע %m.motors וגם %m.motors ב %n צעדים עם %n %m.motorDirections',
			doStopMotor: 'עצור מנוע %m.motors',
			doConfigureInput: 'הגדר קלט %m.inputs ל %m.inputModes',
			dir_forward: 'קדימה',
			dir_backwards: 'אחורה',
			sens_color: 'חיישן צבע',
			sens_distance: 'חיישן מרחק',
			sens_ntc: 'NTC חיישן',
			sens_photo: 'חיישן אור',
			sens_lightBarrier: 'מחסום אור',
			sens_button: 'מתג',
			sens_reed: 'חיישן מגנטיות',
			openclose_opens: 'נפתח',
			openclose_closes: 'נסגר',
			mode_a5k: 'התנגדות אנלוגית',
			mode_d5k: 'התנגדות דיגיטלית',
			mode_a10v: 'מתח אנלוגי',
			mode_d10v: 'מתח דיגיטלי',
			mode_ultrasonic: 'אולטרהסאונד',
			reset: 'איפוס'
		},
		
		fr: {
			onOpenClose: 'Si %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'Si compteur %m.counters %m.compares %n',
			onInput: 'Si valeur de %m.inputSensors %m.inputs %m.compares %n',
			isClosed: '%m.openCloseSensors %m.inputs fermé?',
			getCounter: 'Si lecture de valeur de compteur %m.counters',
			getSensor: 'Si lecture de valeur %m.inputSensors %m.inputs',
			doPlaySound: 'Jouer sound %n',
			doPlaySoundWait: 'Jouer sound %n et attendre',
			doSetLamp: 'Si lumière %m.outputs mise sur %n',
			doSetOutput: 'Si sortie %m.outputs mise sur %n',
			doResetCounter: 'Si compteur %m.counters réinitialisé',
			doSetMotorSpeed: 'Si moteur %m.motors mis sur %n',
			doSetMotorSpeedDir: 'Si moteur %m.motors mis sur %n %m.motorDirections',
			doSetMotorDir: 'Si moteur %m.motors mis sur %m.motorDirections',
			doSetMotorSpeedDirDist: 'Si moteur %m.motors ajusté aux étapes %n avec %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'Si moteur %m.motors ajusté avec %m.motors avec %n %m.motorDirections',
			doSetMotorSpeedDirDistSync: 'Si moteur %m.motors ajusté avec %m.motors aux étapes %n avec %n %m.motorDirections',
			doStopMotor: 'Si moteur %m.motors stoppé',
			doConfigureInput: 'Si entrée %m.inputs mise sur %m.inputModes',
			dir_forward: 'vers l‘avant',
			dir_backwards: 'vers l‘arrière',
			sens_color: 'Capteur de couleur',
			sens_distance: 'Capteur de distance',
			sens_ntc: 'Résistance NTC',
			sens_photo: 'Résistance photo',
			sens_lightBarrier: 'Barrière lumineuse',
			sens_button: 'Interrupteur',
			sens_reed: 'Contact Reed',
			openclose_opens: 'ouvre',
			openclose_closes: 'ferme',
			mode_a5k: 'Résistance analogique',
			mode_d5k: 'Résistance numérique',
			mode_a10v: 'Tension analogique',
			mode_d10v: 'Tension numérique',
			mode_ultrasonic: 'Ultrason',
			reset: 'réinitialiser'
		},
		
		es: {
			onOpenClose: 'Cuando %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'Cuando el contador %m.counters %m.compares %n',
			onInput: 'Cuando el valor de %m.inputSensors %m.inputs %m.compares %n',
			isClosed: '¿%m.openCloseSensors %m.inputs cerrado?',
			getCounter: 'Leer el valor del contador %m.counters',
			getSensor: 'Leer el valor de %m.inputSensors %m.inputs',
			doPlaySound: 'Reproducir sonido %n',
			doPlaySoundWait: 'Reproducir sonido %n y esperar',
			doSetLamp: 'Fijar la lámpara %m.outputs a %n',
			doSetOutput: 'Fijar la salida %m.outputs a %n',
			doResetCounter: 'Reiniciar el contador %m.counters',
			doSetMotorSpeed: 'Fijar el motor %m.motors a %n',
			doSetMotorSpeedDir: 'Fijar el motor %m.motors a %n %m.motorDirections',
			doSetMotorDir: 'Fijar el motor %m.motors a %m.motorDirections',
			doSetMotorSpeedDirDist: 'Arrancar el motor %m.motors %n pasos con %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'Arrancar el motor %m.motors con %m.motors con %n %m.motorDirections',
			doSetMotorSpeedDirDistSync: 'Arrancar el motor %m.motors con %m.motors %n pasos con %n %m.motorDirections',
			doStopMotor: 'Detener el motor %m.motors',
			doConfigureInput: 'Fijar la entrada %m.inputs a %m.inputModes',
			dir_forward: 'adelante',
			dir_backwards: 'atrás',
			sens_color: 'sensor de colores',
			sens_distance: 'sensor de distancia',
			sens_ntc: 'resistencia NTC',
			sens_photo: 'fotorresistencia',
			sens_lightBarrier: 'sensor fotoeléctrico',
			sens_button: 'conmutador',
			sens_reed: 'contacto magnético',
			openclose_opens: 'abre',
			openclose_closes: 'cierra',
			mode_a5k: 'resistencia analógica',
			mode_d5k: 'resistencia digital',
			mode_a10v: 'tensión analógica',
			mode_d10v: 'tensión digital',
			mode_ultrasonic: 'ultrasonido',
			reset: 'restablecer'
		},
		
		nl: {
			onOpenClose: 'Wanneer %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'Wanneer teller %m.counters %m.compares %n',
			onInput: 'Wanneer waarde van %m.inputSensors %m.inputs %m.compares %n',
			isClosed: '%m.openCloseSensors %m.inputs gesloten?',
			getCounter: 'Lees waarde van teller %m.counters',
			getSensor: 'Lees waarde van %m.inputSensors %m.inputs',
			doPlaySound: 'Geluid %n afspelen',
			doPlaySoundWait: 'Geluid %n afspelen en wachten',
			doSetLamp: 'Stel lamp %m.outputs in op %n',
			doSetOutput: 'Stel uitgang %m.outputs in op %n',
			doResetCounter: 'Reset teller %m.counters',
			doSetMotorSpeed: 'Stel motor %m.motors in op %n',
			doSetMotorSpeedDir: 'Stel motor %m.motors in op %n %m.motorDirections',
			doSetMotorDir: 'Stel motor %m.motors in op %m.motorDirections',
			doSetMotorSpeedDirDist: 'Verplaats motor %m.motors met behulp van %n %m.motorDirections in %n stappen',
			doSetMotorSpeedDirSync: 'Verplaats motor %m.motors met %m.motors met behulp van %n %m.motorDirections',
			doSetMotorSpeedDirDistSync: 'Verplaats motor %m.motors met %m.motors met behulp van %n %m.motorDirections in %n stappen',
			doStopMotor: 'Stop motor %m.motors',
			doConfigureInput: 'Stel ingang %m.inputs in op %m.inputModes',
			dir_forward: 'vooruit',
			dir_backwards: 'achteruit',
			sens_color: 'kleurensensor',
			sens_distance: 'afstandssensor',
			sens_ntc: 'NTC-weerstand',
			sens_photo: 'fotoweerstand',
			sens_lightBarrier: 'fotocel',
			sens_button: 'schakelaar',
			sens_reed: 'Reed-contact',
			openclose_opens: 'opent',
			openclose_closes: 'sluit',
			mode_a5k: 'weerstand analoog',
			mode_d5k: 'weerstand digitaal',
			mode_a10v: 'spanning analoog',
			mode_d10v: 'spanning digitaal',
			mode_ultrasonic: 'ultrasoon',
			reset: 'resetten'
		},
		
		pt: {
			onOpenClose: 'Quando %m.openCloseSensors %m.inputs %m.openClose',
			onCounter: 'Quando o contador %m.counters %m.compares %n',
			onInput: 'Quando o valor de %m.inputSensors %m.inputs %m.compares %n',
			isClosed: '%m.openCloseSensors %m.inputs fechado?',
			getCounter: 'A ler valor do contador %m.counters',
			getSensor: 'A ler valor do %m.inputSensors %m.inputs',
			doPlaySound: 'Reproduzir som %n',
			doPlaySoundWait: 'Reproduzir som %n e aguardar',
			doSetLamp: 'A definir lâmpada %m.outputs para %n',
			doSetOutput: 'A definir saída %m.outputs para %n',
			doResetCounter: 'A repor contador %m.counters',
			doSetMotorSpeed: 'A definir motor %m.motors para %n',
			doSetMotorSpeedDir: 'A definir motor %m.motors para %n %m.motorDirections',
			doSetMotorDir: 'A definir motor %m.motors para %m.motorDirections',
			doSetMotorSpeedDirDist: 'A deslocar motor %m.motors em incrementos de %n com %n %m.motorDirections',
			doSetMotorSpeedDirSync: 'A deslocar motor %m.motors com %m.motors com %n %m.motorDirections',
			doSetMotorSpeedDirDistSync: 'A deslocar motor %m.motors com %m.motors em incrementos de %n com %n %m.motorDirections',
			doStopMotor: 'A parar motor %m.motors',
			doConfigureInput: 'A definir entrada %m.inputs para %m.inputModes',
			dir_forward: 'para a frente',
			dir_backwards: 'para trás',
			sens_color: 'Sensor de cor',
			sens_distance: 'Sensor de distância',
			sens_ntc: 'Resistência NTC',
			sens_photo: 'Fotorresistência',
			sens_lightBarrier: 'Célula fotoelétrica',
			sens_button: 'Interruptor',
			sens_reed: 'Contacto Reed',
			openclose_opens: 'abre',
			openclose_closes: 'fecha',
			mode_a5k: 'Resistência analógica',
			mode_d5k: 'Resistência digital',
			mode_a10v: 'Tensão analógica',
			mode_d10v: 'Tensão digital',
			mode_ultrasonic: 'Ultrassons',
			reset: 'repor'
		}
				
	},	
	
	// get a translated version for the given constant
	get: function(what) {
		var codes = this.trans[this.langCode];		// requested language
		if (!codes) { codes = this.trans['en']; }	// fallback
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
	}
	
};

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
		return $.ajax({
              async: true,
			  url: this.host + command,
              dataType: 'json',
			  method: 'POST',
			  data: JSON.stringify(values),
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

(function(ext) {
	
	// the current sensor values from the device
	ext.currentValues = null;
	
	// the previous values from the device (for change detection)
	ext.oldValues = null;
		
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};
	
	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return IO.updateStatus();
	};
	
	// reset the device
	ext.reset = function() {
		IO.doPost('reset', null);
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
	};
	
	// describes one output (value)
	function Output() {
		this.mod = false;		// output was changed?
		this.val = 0;
		this.modified =			function() {this.mod = true;}
		this.transmitted =		function() {this.mod = false;}
	};
	
	// describes one input-configuration (mode)
	function Input() {
		this.mod = false;		// input was changed?
		this.mode = -1;			// start with "unknown"
		this.setMode = function(newMode) {
			var changed = this.mode != newMode;
			this.mode = newMode;
			if (changed) {this.mod = true;}
		}
		this.transmitted = function() {
			this.mod = false;
		}
	};
	
	// describes one counter-configuration
	function Counter() {
		this.mod = false;
		this.rst = false;
		this.doReset = function() {
			this.rst = true;
			this.mod = true;
		}
		this.transmitted = function() {
			this.mod = false;
		}
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
		console.log(inputMode);
		if (inputMode == Lang.getMode('d10v'))			{return 0;}
		if (inputMode == Lang.getMode('d5k'))			{return 1;}
		if (inputMode == Lang.getMode('a10v'))			{return 2;}
		if (inputMode == Lang.getMode('a5k'))			{return 3;}
		if (inputMode == Lang.getMode('ultrasonic'))	{return 4;}
		console.log("err");
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
		else													{alert("unsupported sensor type");}
	};
		
	

	
	
	// update the current sensor values from the device
	ext.doUpdate = function() {

		var params = ext.output;
		
		IO.doPost('update', params)
			.done(function(data) {
				ext.input.oldValues = ext.input.curValues;
				ext.input.curValues = data;
				ext.output.transmitted();
			})
			.fail(function( xhr, status, err ) {
				console.log(err);						// DEBUG
			});
	
	};
	
	
	
	
	/** play the given sound */
	ext.doPlaySound = function(sndIdx) {
		var cfg = {idx: sndIdx};
		IO.doPost("sound", cfg);
	};
	
	/** play the given sound and call the callback as soon as it finished */
	ext.doPlaySoundWait = function(sndIdx, callback) {
		var cfg = {idx: sndIdx};
		IO.doPost("sound", cfg);
		var id = window.setInterval(function() {
			if (!ext.input.curValues.isPlaying) {
				window.clearInterval(id);
				callback();
			}			
		}, 200);
	};
	
	/** set the lamp at the given output to the provided value [0:8] */
	ext.doSetLamp = function(outputName, value) {
		ext._setOutput08(outputName, value);
	};
	
	/** set the given Output 'Ox' to the provided value [0:8] */
	ext.doSetOutput = function(outputName, value) {
		ext._setOutput08(outputName, value);
	};
	
	
	/** adjust the given motor's speed */
	ext.doSetMotorSpeed = function(motorName, value) {
		ext._setMotorSpeed08(motorName, value);
	};
	
	/** adjust the given motor's direction */
	ext.doSetMotorDir = function(motorName, dirName) {
		ext._setMotorDir(motorName, dirName);
	};
	
	
	/** adjust the given motor's speed and direction */
	ext.doSetMotorSpeedDir = function(motorName, value, dirName) {
		ext._setMotorDir(motorName, dirName);
		ext._setMotorSpeed08(motorName, value);
	};
	
	/** let the given motor move "steps" steps into the given direction with the provided speed */
	ext.doSetMotorSpeedDirDist = function(motorName, steps, value, dirName) {
		// do NOT change sync-constraint
		ext._setMotorDist(motorName, steps);
		ext._setMotorDir(motorName, dirName);
		ext._setMotorSpeed08(motorName, value);
	};
	
	/** synchronize the two given motors */
	ext.doSetMotorSpeedDirSync = function(motor1Name, motor2Name, value, dirName) {
		// do NOT chang distance-limit
		ext._setMotorSync(motor1Name, motor2Name);
		ext._setMotorDir(motor1Name, dirName);
		ext._setMotorDir(motor2Name, dirName);
		ext._setMotorSpeed08(motor1Name, value);
		ext._setMotorSpeed08(motor2Name, value);
	};
	
	/** synchronize the two given motors with distance */
	ext.doSetMotorSpeedDirDistSync = function(motor1Name, motor2Name, steps, value, dirName) {
		ext._setMotorSync(motor1Name, motor2Name);
		ext._setMotorDist(motor1Name, steps);
		ext._setMotorDist(motor2Name, steps);
		ext._setMotorDir(motor1Name, dirName);
		ext._setMotorDir(motor2Name, dirName);
		ext._setMotorSpeed08(motor1Name, value);
		ext._setMotorSpeed08(motor2Name, value);
	};
	
		
	/** stop the given motor [remove distance and sync constraints] */
	ext.doStopMotor = function(motorName) {
		ext._setMotorSpeed08(motorName, 0);		// set speed to 0
		ext._setMotorDist(motorName, 0);		// remove distance limits
		ext._setMotorSyncNone(motorName);		// remove sync constraints
	};
	
	/** reset the given counter to zero */
	ext.doResetCounter = function(counterName) {
		var idx = ext._counterNameToIdx(counterName);
		ext.output.counters[idx].doReset();
	};
	
	/** expert config: input -> mode */
	ext.doConfigureInput = function(inputName, inputMode) {
		console.log(inputName + " - " + inputMode);
		var idx = ext._inputModeToIdx(inputMode);
		ext._setSensorMode(inputName, idx);
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
		
		// get value
		var idx = ext._inputNameToIdx(inputName);
		return ext.input.curValues.inputs[idx];
		
	};
	
	/** button/lightBarrier/reed is closed */
	ext.isClosed = function(sensorType, inputName) {
		
		// ensure inputName uses the correct configuration
		//ext._setSensorMode(inputName, 1);		// DIGITAL_5KOHM
		ext._adjustInputModeDigital(inputName, sensorType);
		
		// fetch
		var idx = ext._inputNameToIdx(inputName);
		return ext.input.curValues.inputs[idx] === 1;		// TODO light barrier?
		
	};
	
	
	/** sensor X on input 'Ix' >,<,= value */
	ext.onInput = function(sensorType, value, operator, inputName) {
				
		// ensure correct working mode
		ext._adjustInputModeAnalog(inputName, sensorType);
		
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
	ext.onCounter = function(counterName, operator, value) {
		
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
			['h', Lang.get('onCounter'),					'onCounter',					'C1', '>', 0],
			['h', Lang.get('onInput'),						'onInput',						Lang.getSensor('color'), 0, '>', 'I1'],
				
			// gets
			['r', Lang.get('getCounter'),					'getCounter',					'C1'],
			['r', Lang.get('getSensor'),					'getSensor',					Lang.getSensor('color'), 'I1'],
			
			['r', Lang.get('isClosed'),						'isClosed',						Lang.getSensor('button'), 'I1'],
			
			
			// sets
			[' ', Lang.get('doPlaySound'),					'doPlaySound',					1],
			['w', Lang.get('doPlaySoundWait'),				'doPlaySoundWait',				1],
			
			[' ', Lang.get('doSetLamp'),					'doSetLamp',					'O1', 0],
			[' ', Lang.get('doSetOutput'),					'doSetOutput',					'O1', 0],
			[' ', Lang.get('doResetCounter'),				'doResetCounter',				'C1'],
			
			[' ', Lang.get('doSetMotorSpeed'),				'doSetMotorSpeed',				'M1', 8],
			[' ', Lang.get('doSetMotorSpeedDir'),			'doSetMotorSpeedDir',			'M1', 8, Lang.getMotorDir('forward')],			
			[' ', Lang.get('doSetMotorDir'),				'doSetMotorDir',				'M1', Lang.getMotorDir('forward')],
			[' ', Lang.get('doSetMotorSpeedDirDist'),		'doSetMotorSpeedDirDist',		'M1', 100, 8, Lang.getMotorDir('forward')],
			[' ', Lang.get('doSetMotorSpeedDirSync'),		'doSetMotorSpeedDirSync',		'M1', 'M2', 8, Lang.getMotorDir('forward')],
			[' ', Lang.get('doSetMotorSpeedDirDistSync'),	'doSetMotorSpeedDirDistSync',	'M1', 'M2', 100, 8, Lang.getMotorDir('forward')],
			
			[' ', Lang.get('doStopMotor'),					'doStopMotor',					'M1'],

			[' ', Lang.get('doConfigureInput'),				'doConfigureInput',				'I1', Lang.getMode('d10v')],

			
			[' ', Lang.get('reset'),						'reset'],
			
		],
		
		menus: {
			
			compares:			['<', '>'],
			
			inputSensors:		[Lang.getSensor('color'), Lang.getSensor('distance'), Lang.getSensor('ntc'), Lang.getSensor('photo')],
			
			openCloseSensors:	[Lang.getSensor('button'), Lang.getSensor('reed'), Lang.getSensor('lightBarrier')],
			openClose:			[Lang.getOpenClose('opens'), Lang.getOpenClose('closes')],
			
			inputs:				['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8'],
			//buttonStates:		[getButtonState('pressed'), getButtonState('released')],
			//lightBarrierStates:	[getLightBarrierState('opens'), getLightBarrierState('closes')],
			motors:				['M1', 'M2', 'M3', 'M4'],
			motorDirections:	[Lang.getMotorDir('forward'), Lang.getMotorDir('backwards')],
			
			
			counters:			['C1', 'C2', 'C3', 'C4'],
			
			outputs:			['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8'],
			outputValues:		[0, 1, 2, 3, 4, 5, 6, 7, 8],
			
			inputModes:			[Lang.getMode('d10v'), Lang.getMode('d5k'), Lang.getMode('a10v'), Lang.getMode('a5k'), Lang.getMode('ultrasonic')],
	
		},
		
		url: 'http://www.fischertechnik.de/home/info/Computing/ROBOTICS-TXT-Controller.aspx/usetemplate-1_column_no_pano/',
		
	};
	

	
	// Register the extension
	ScratchExtensions.register('fischertechnik ROBO-TXT', descriptor, ext);
	//alert(1);
	
	// start the update loop: periodically fetch sensor values from the device
	setInterval(ext.doUpdate, 60);
	
	// ensure the ROBO LT is reset
	ext.reset();
	
})({});

