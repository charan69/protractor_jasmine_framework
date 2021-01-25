import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import * as _ from "lodash";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
let SpeechRecognitionService = class SpeechRecognitionService {
    constructor(zone) {
        this.zone = zone;
        this.closeSideNav = new BehaviorSubject(false);
    }
    record() {
        return Observable.create(observer => {
            const { webkitSpeechRecognition } = window;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;
            this.speechRecognition;
            this.speechRecognition.onresult = speech => {
                let term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            // console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = _.trim(transcript);
                            // console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };
            this.speechRecognition.onerror = error => {
                observer.error(error);
            };
            this.speechRecognition.onend = () => {
                observer.complete();
            };
            this.speechRecognition.start();
            // console.log("Say something - We are listening !!!");
        });
    }
    DestroySpeechObject() {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    }
};
SpeechRecognitionService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], SpeechRecognitionService);
export { SpeechRecognitionService };
//# sourceMappingURL=speech-recognition-service.js.map