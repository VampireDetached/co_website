import ReactMarkdown from "react-markdown";
import content from "@/content/benchmark.md";

export default function BenchmarkPage() {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}