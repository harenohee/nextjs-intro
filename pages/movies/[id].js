import { useRouter } from "next/router";

// url에 변수를 넣는 방법
export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
