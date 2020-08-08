﻿let transitionId = 0;
export class Transition {
	private _duration: number;
	private _curve: UIViewAnimationCurve;
	private _id: number;

	constructor(duration: number, curve: UIViewAnimationCurve = UIViewAnimationCurve.EaseInOut) {
		this._duration = duration ? duration / 1000 : 0.35;
		this._curve = curve;
		this._id = transitionId++;
	}

	public getDuration(): number {
		return this._duration;
	}

	public getCurve(): UIViewAnimationCurve {
		return this._curve;
	}

	public animateIOSTransition(containerView: UIView, fromView: UIView, toView: UIView, operation: UINavigationControllerOperation, completion: (finished: boolean) => void): void {
		throw new Error('Abstract method call');
	}

	public createAndroidAnimator(transitionType: string): any {
		throw new Error('Abstract method call');
	}

	public toString(): string {
		return `Transition@${this._id}`;
	}
}
