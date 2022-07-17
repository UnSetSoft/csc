let btnclass;
export default function Button(classArg, arg) {
  btnclass = classArg ? "kg__button " + classArg : "kg__button";
  return <button className={btnclass} {...arg}></button>;
}
