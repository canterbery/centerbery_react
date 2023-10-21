import "./FooterMap.css";

export const FooterMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6029.917531314879!2d30.23835762708968!3d50.54778558409366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b313c8dc837fd%3A0xfb467dc23da1445c!2z0KLQsNGD0L3RhdCw0YPRgdC4ICLQmtCV0J3QotCV0KDQkdCV0KDQhiAyIg!5e0!3m2!1sru!2sua!4v1662538790964!5m2!1sru!2sua"
      height="500"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    ></iframe>
  );
};
