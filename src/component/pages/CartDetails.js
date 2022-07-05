import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
function CartDetails() {
	const cartData = useSelector((state) => {
		return state.cart.cart;
	});
	console.log("cart", cartData);
	let complete;
	if (cartData !== undefined) {
		complete = cartData.map((ar) => ar.price);
	}
	const sum = complete.reduce(function (sum, number) {
		const updatedSum = sum + number;
		return updatedSum;
	}, 0);

	const dispatch = useDispatch(removeFromCart);
	return (
		<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
			<div class="pointer-events-auto w-screen max-w-md">
				<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
					<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
						<div class="flex items-start justify-between">
							<h2
								class="text-lg font-medium text-gray-900"
								id="slide-over-title"
							>
								Shopping cart
							</h2>
							<div class="ml-3 flex h-7 items-center">
								<button
									type="button"
									class="-m-2 p-2 text-gray-400 hover:text-gray-500"
								>
									<span class="sr-only">
										Close panel
									</span>
									{/* <!-- Heroicon name: outline/x --> */}
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div class="mt-8">
							<div class="flow-root">
								<ul
									role="list"
									class="-my-6 divide-y divide-gray-200"
								>
									{/* <li class="flex py-6">
										<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img
												src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
												alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
												class="h-full w-full object-cover object-center"
											/>
										</div>

										<div class="ml-4 flex flex-1 flex-col">
											<div>
												<div class="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<a href="#">
															{" "}
															Throwback
															Hip
															Bag{" "}
														</a>
													</h3>
													<p class="ml-4">
														$90.00
													</p>
												</div>
												<p class="mt-1 text-sm text-gray-500">
													Salmon
												</p>
											</div>
											<div class="flex flex-1 items-end justify-between text-sm">
												<p class="text-gray-500">
													Qty 1
												</p>

												<div class="flex">
													<button
														type="button"
														class="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Remove
													</button>
												</div>
											</div>
										</div>
									</li> */}

									{cartData?.map((singleItem) => {
										return (
											<li class="flex py-6">
												<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
													<img
														src={
															singleItem.image
														}
														alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
														class="h-full w-full object-cover object-center"
													/>
												</div>
												<div class="ml-4 flex flex-1 flex-col">
													<div>
														<div class="flex justify-between text-base font-medium text-gray-900">
															<h3>
																<a href="#">
																	{
																		singleItem.name
																	}
																</a>
															</h3>
															<p class="ml-4">
																{
																	singleItem.price
																}
															</p>
														</div>
														<p class="mt-1 text-sm text-gray-500">
															{
																singleItem.type
															}
														</p>
													</div>
													<div class="flex flex-1 items-end justify-between text-sm">
														<p class="text-gray-500">
															Qty 1
														</p>

														<div class="flex">
															<button
																id={
																	singleItem.id
																}
																onClick={() =>
																	dispatch(
																		removeFromCart(
																			singleItem.id,
																		),
																	)
																}
																type="button"
																class="font-medium text-indigo-600 hover:text-indigo-500"
															>
																Remove
															</button>
														</div>
													</div>
												</div>
											</li>
										);
									})}

									{/* <!-- More products... --> */}
								</ul>
							</div>
						</div>
					</div>

					<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
						<div class="flex justify-between text-base font-medium text-gray-900">
							<p>Subtotal</p>
							<p className="text-red-500">Rs:{sum}</p>
						</div>
						<p class="mt-0.5 text-sm text-gray-500">
							Shipping and taxes calculated at checkout.
						</p>
						<div class="mt-6">
							<a
								href="/checkout"
								class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
							>
								Checkout
							</a>
						</div>
						<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
							<p>
								or{" "}
								<Link to={"/"}>
									<button
										type="button"
										class="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Continue Shopping
										<span aria-hidden="true">
											{" "}
											&rarr;
										</span>
									</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartDetails;
