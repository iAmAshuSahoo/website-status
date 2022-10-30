import award from '@/interfaces/award.type';

type task = {
  id: string;
  title: string;
  purpose: string;
  featureUrl: string;
  type: string;
  links: string[];
  endsOn: string;
  startedOn: string;
  status: string;
  assignee?: string;
  percentCompleted: number;
  dependsOn: string[];
  participants?: string[];
  completionAward: award;
  priority?: string;
  lossRate: award;
  isNoteworthy: boolean;
  createdBy: string;
};

export default task;
