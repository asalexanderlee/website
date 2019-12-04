import React from 'react';
import './Background.css';

const Background = () => {
  return(
    <div class="Background">
      <svg class="Background" preserveAspectRatio="none" viewBox="0 0 350 580">
        <path xmlns="http://www.w3.org/2000/svg" fill="#5982ff" d="m20 2.3954797c0 25.313168 -9.513275 57.575954 8.385834 75.47507c21.125092 21.125092 59.58487 27.369843 70.6824 55.107605c15.433319 38.57486 -45.173615 77.619934 -38.335953 118.60106c7.483185 44.84996 77.90144 53.973465 98.23622 94.64305c8.054382 16.108734 -7.9567566 36.437256 -3.5931702 53.910767c3.1589355 12.649536 21.998566 17.300568 25.15747 29.950104c3.9857178 15.960327 -12.149506 34.40439 -4.792633 49.118134c9.037567 18.075165 28.104156 29.842133 37.1391 47.91861c5.371216 10.746338 10.260162 21.891907 13.178467 33.54596c1.579071 6.305908 -1.0034485 14.57135 3.5931702 19.167969c13.862427 13.862427 39.683105 -1.1566772 58.70343 3.5932007c12.403961 3.0975952 25.725403 -0.90722656 38.335968 1.1968384c6.3512573 1.0596924 14.614868 6.949402 19.167969 2.3963013c5.7594604 -5.7594604 -2.8181763 -16.058472 -4.7926636 -23.960632c-5.0872803 -20.360413 -5.977539 -46.101562 -22.761139 -58.700775c-17.09732 -12.834686 -48.731018 -14.001068 -53.910767 -34.742767c-3.9857178 -15.960327 8.786591 -33.15985 4.7926636 -49.118134c-4.2137756 -16.836548 -23.775543 -30.900665 -20.367462 -47.91864c3.2388306 -16.172852 15.141022 -35.395813 5.989502 -49.118103c-24.958466 -37.42401 -83.219025 -41.889587 -110.21524 -77.87138c-12.683472 -16.905151 13.088348 -40.577652 23.960632 -58.70079c18.245636 -30.413803 27.537476 -72.491005 14.375336 -105.42519c-7.9159546 -19.807262 -26.213043 -33.659134 -39.53543 -50.31759c-5.687042 -7.111128 -0.7501221 -19.913406 -7.1863403 -26.35433c-13.575348 -13.585238 -38.49121 -6.3093576 -57.503937 -3.5958004c-16.208466 2.3133192 -32.745422 0 -49.11812 0c-3.6817474 0 -10.78215 -1.2854191 -10.78215 2.3963256" fill-rule="evenodd"/>
        <path xmlns="http://www.w3.org/2000/svg" fill="blue" d="m200 3.5923328c-6.362198 19.114489 -49.513504 29.9616 -38.335953 46.721786c7.5723724 11.354412 35.02928 1.1367531 38.335953 14.377953c0.21632385 0.8662567 -0.9515228 1.5378265 -1.1968536 2.3963242c-0.54859924 1.9198303 -4.5835876 5.5788803 -4.7926483 3.5931778c-1.254364 -11.914467 11.980316 -23.960629 0 -23.960629c-11.995316 0 0.58073425 12.098148 -1.1994781 23.960629c-0.35549927 2.3689194 -4.7908936 0 -7.1863556 0c-8.145081 0 -15.974121 -6.3920517 -23.960617 -4.7926483c-15.23053 3.0501022 -30.499619 17.114655 -33.54332 32.34645c-4.7241364 23.641464 50.221603 13.06192 64.69029 32.34646c4.8524933 6.467636 10.344849 14.916473 8.385834 22.761154c-1.5050201 6.026703 -8.783463 8.786087 -13.175858 13.178482c-6.5920105 6.5920105 -7.051361 18.509064 -4.7926483 27.553802c4.6691895 18.697235 43.24945 13.649231 47.91864 32.34645c5.120636 20.50499 -29.081284 38.199097 -23.958008 58.70343c8.634277 34.55603 27.287537 66.07831 35.939636 100.62991c5.64386 22.538422 -23.112335 40.95691 -28.753296 63.496063c-3.5555573 14.206696 16.29953 25.1716 19.168 39.532806c3.6234436 18.141052 -13.178497 35.411377 -13.178497 53.910767c0 13.394104 17.97113 22.545532 17.97113 35.939636c0 9.32251 -4.252075 29.8125 4.7926636 27.553772c6.2471924 -1.5600586 0.83621216 -12.920715 2.3963318 -19.167969c2.0885315 -8.363342 7.68219 -16.705078 5.989502 -25.15747c-1.5565796 -7.772644 -13.649261 -10.281555 -15.574829 -17.97113c-5.1364136 -20.511902 16.13382 -41.560364 11.981628 -62.293945c-2.731079 -13.637604 -22.987152 -18.852509 -26.356934 -32.346466c-2.2275696 -8.920044 10.473602 -15.114777 15.574799 -22.763794c7.5362244 -11.300201 14.104492 -23.818207 16.771637 -37.136475c3.3232422 -16.5943 -9.2030945 -32.78415 -16.771637 -47.921265c-9.658478 -19.316956 -16.331665 -40.143585 -21.564316 -61.097107c-3.1693726 -12.691437 12.511551 -23.084412 20.364822 -33.54593c9.075317 -12.089371 13.255432 -29.661072 9.585327 -44.325455c-3.3921204 -13.553635 -27.561234 -10.385513 -35.942276 -21.564316c-6.2693024 -8.362122 1.0583801 -21.008392 3.59581 -31.146973c2.8630676 -11.439758 -8.433044 -22.81099 -16.771652 -31.149612c-12.609161 -12.609146 -48.659683 -12.649567 -44.328094 -29.947502c3.105713 -12.402435 24.73468 -6.4875946 37.139114 -9.585304c7.987335 -1.9946442 14.229553 -8.987831 19.167969 -15.574802c2.9628296 -3.9518776 5.802063 -9.957577 3.5931854 -14.375328c-3.7159576 -7.431923 -20.364838 -6.066189 -20.364838 -14.375328c0 -14.732523 30.543442 -23.959053 23.960632 -37.139107c-2.770172 -5.5464306 -11.771378 4.7926507 -17.97113 4.7926507" fill-rule="evenodd"/>
      </svg>
    </div>
  )
}

export default Background;
