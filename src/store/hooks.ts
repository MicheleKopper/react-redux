import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Store } from ".";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Store>();
