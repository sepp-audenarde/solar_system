import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

export function useHide(ref, condition) {
	if (!Array.isArray(condition)) throw Error("condition must be type 'array'");

	useEffect(() => {
		if (condition.every((c) => c === true)) {
			ref.current.style.opacity = 1;
			ref.current.style.pointerEvents = "auto";
		} else {
			ref.current.style.opacity = 0;
			ref.current.style.pointerEvents = "none";
		}
	}, condition);
}

export function useTop() {
	setTimeout(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, 0);
}

export function useUnblock() {
	document.body.classList.remove("disableScroll");
}

export function useTransitBlock() {
	const { setTransit } = useGlobalContext();

	setTransit(true);
	setTimeout(() => {
		setTransit(false);
	}, 800);
}
