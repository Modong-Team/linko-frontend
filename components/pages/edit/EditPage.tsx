import { NewPage } from '../new';
import { useEffect } from 'react';
import { getApplication } from '../../../api/application';
import useForms from '../../../hooks/useForms';
import { getForms } from '../../../api/form';
import usePostedFormDataId from '../../../hooks/usePostedFormDataId';
import useNewApplication from '../../../hooks/useNewApplication';
import useNewApplicationId from '../../../hooks/useNewApplicationId';
import produce from 'immer';
import { EssentialCategories } from '../../../constants/essentials';
import { ApplicationStatus } from '../../../constants/applicationStatus';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';

export default function EditPage({ applicationId }: EditPageProps) {
	const {
		onSetNewApplicationTitle,
		onSetNewApplicationUrlId,
		onSetNewApplicationClubId,
		onAddNewApplicationEssentials,
	} = useNewApplication();
	const { onRequestSetNewApplicationId } = useNewApplicationId();
	const { onSetForms } = useForms();
	const { onAddPostedFormDataId } = usePostedFormDataId();
	const onRouteToMain = useRouteToPath(Paths.main);

	const setPrevData = async () => {
		if (!applicationId) return;
		const forms = await getForms(applicationId);
		const application = await getApplication(applicationId);

		const cleanedForms = { ...forms };
		cleanedForms.data.forEach((form: any) => {
			onAddPostedFormDataId(form.id);
			form.dataId = produce(form.id, (draft: any) => draft);
			form.questions?.forEach((questionRequest: any) => {
				/* prettier-ignore */
				questionRequest.questionOptionRequest = produce(questionRequest.options, (draft: any) => draft);
				delete questionRequest.options;
				delete questionRequest.id;
			});
			form.questionRequests = produce(form.questions, (draft: any) => draft);
			delete form.questions;
			delete form.id;
		});
		onSetForms(cleanedForms.data as any);

		onRequestSetNewApplicationId(applicationId);
		onSetNewApplicationTitle(application.data.title);
		onSetNewApplicationUrlId(application.data.urlId);
		onSetNewApplicationClubId(application.data.clubId);
		application.data.essentialQuestions.forEach(({ id }) => {
			if (!EssentialCategories.default.includes(id)) onAddNewApplicationEssentials(id);
		});
	};

	const decideWhetherToAllowAccess = async () => {
		const application = await getApplication(applicationId);
		if (application.data.status !== ApplicationStatus.prepare) onRouteToMain();
		else setPrevData();
	};

	useEffect(() => {
		if (!applicationId) return;
		decideWhetherToAllowAccess();
	}, [applicationId]);

	return <NewPage />;
}
