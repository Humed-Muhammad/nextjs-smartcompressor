/* eslint-disable tailwindcss/no-custom-classname */

import { Button } from 'antd';
import Link from 'next/link';

import { Container } from '@/components/base';

const Page404 = () => {
  return (
    <>
      <Container className="bg-white font-sans">
        <div className="w-full text-center">
          <div className="four_zero_four_bg h-96 w-full bg-center bg-no-repeat ">
            <h1 className="text-center ">404</h1>
          </div>

          <div className="contant_box_404">
            <h3 className="h2">Look like you&apos;re lost</h3>

            <p>the page you are looking for not avaible!</p>

            <Link href="/" passHref>
              <Button className="my-5 bg-green-600 px-5 py-3 text-white hover:bg-green-600 hover:text-white ">
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .four_zero_four_bg {
          background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        }

        .four_zero_four_bg h1 {
          font-size: 80px;
        }

        .four_zero_four_bg h3 {
          font-size: 80px;
        }

        .link_404 {
          color: #fff !important;
          padding: 10px 20px;
          background: #39ac31;
          margin: 20px 0;
          display: inline-block;
        }
        .contant_box_404 {
          margin-top: -50px;
        }
      `}</style>
    </>
  );
};

export default Page404;
