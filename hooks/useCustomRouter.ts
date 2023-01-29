import { useRouter } from 'next/router';

export default function useCustomRouter() {
	const router = useRouter();
	const onRouteToPath = (path: string) => router.push(path);
	return { onRouteToPath };
}
