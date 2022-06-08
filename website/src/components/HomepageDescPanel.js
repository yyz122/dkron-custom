import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function HomepageDescPanel() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <div className="bg-white">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-6 py-10 rounded-md bg-gradient-to-tr from-pink-600 to-fuchsia-700 sm:py-16 sm:px-12 lg:p-16 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <p className="max-w-3xl text-2xl text-pink-50">
              {siteConfig.customFields.description_extended}
            </p>
          </div>
          <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <div className="absolute right-0 flex items-center justify-center transform -translate-y-1/2 opacity-10 md:opacity-50 top-1/2">
              <svg className="w-64 h-auto" viewBox="0 0 120 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M111.75 52.2198V74.4199C111.75 82.3199 107.54 89.6198 100.7 93.5698L81.4795 104.67C80.1895 97.7599 75.6896 91.9798 69.5796 88.9498C68.0796 88.1998 67.1197 86.6698 67.1197 84.9898V71.9099C67.1197 67.8399 63.8196 64.5399 59.7496 64.5399C55.6796 64.5399 52.3794 67.8399 52.3794 71.9099V84.9898C52.3794 86.6698 51.4195 88.1998 49.9095 88.9498C43.7995 91.9898 39.2996 97.7599 38.0096 104.67L18.7896 93.5698C11.9496 89.6198 7.73955 82.3199 7.73955 74.4199V52.2198C14.3695 54.5598 21.6196 53.5499 27.3096 49.7699C28.7096 48.8399 30.5095 48.7799 31.9695 49.6199L43.1495 56.0698C46.6095 58.0698 51.1095 57.0798 53.2295 53.6898C55.4595 50.1298 54.2695 45.4699 50.6695 43.3899L39.3396 36.8498C37.8796 36.0098 37.0395 34.4198 37.1395 32.7398C37.5595 25.9298 34.8095 19.1398 29.4695 14.5698L48.6895 3.46982C55.5295 -0.480176 63.9596 -0.480176 70.7996 3.46982L90.0196 14.5698C84.6796 19.1398 81.9297 25.9298 82.3497 32.7298C82.4497 34.4098 81.6095 36.0098 80.1495 36.8498L68.8196 43.3899C65.2896 45.4299 64.0897 49.9298 66.1197 53.4598C68.1597 56.9898 72.6595 58.1899 76.1895 56.1599L87.5196 49.6199C88.9796 48.7799 90.7795 48.8399 92.1795 49.7699C97.8695 53.5399 105.12 54.5598 111.75 52.2198ZM68.8895 97.1898C68.1695 96.6198 67.1097 97.1498 67.1097 98.0698V108.75C67.1097 112.82 63.8095 116.12 59.7395 116.12C55.6695 116.12 52.3697 112.82 52.3697 108.75V98.0798C52.3697 97.1498 51.2996 96.6398 50.5696 97.2098C46.9596 100.08 44.7296 104.6 45.0196 109.64C45.4496 116.97 51.3395 122.93 58.6595 123.45C67.2895 124.06 74.4695 117.24 74.4695 108.75C74.4795 104.06 72.2895 99.8898 68.8895 97.1898ZM20.4595 45.0698C21.3295 44.7298 21.4297 43.5398 20.6197 43.0798L11.3794 37.7398C7.78944 35.6698 6.59961 31.0298 8.79961 27.4798C10.9196 24.0498 15.5196 23.1099 19.0196 25.1299L29.8096 31.3598C29.7996 25.9998 26.8695 20.7899 21.6595 18.1699C15.0295 14.8399 6.75953 17.0899 2.71953 23.3099C-1.91047 30.4499 0.429507 39.9199 7.69951 44.1199C11.7395 46.4599 16.4295 46.6598 20.4595 45.0698ZM117.179 23.9898C113.109 16.9398 104.1 14.5298 97.0396 18.5998C92.9896 20.9398 90.4796 24.8998 89.8296 29.1898C89.6896 30.1098 90.6795 30.7799 91.4795 30.3099L100.72 24.9698C104.25 22.9298 108.75 24.1399 110.79 27.6699C112.83 31.1999 111.62 35.6998 108.09 37.7398L98.8497 43.0798C98.0497 43.5398 98.1396 44.7298 98.9996 45.0698C103.04 46.6598 107.73 46.4599 111.78 44.1299C118.84 40.0499 121.249 31.0398 117.179 23.9898Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}