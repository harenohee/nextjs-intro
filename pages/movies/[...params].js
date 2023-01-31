import Seo from "@/components/Seo";
import { useRouter } from "next/router";

// url에 변수를 넣는 방법
export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}
