import { Tab } from '@/interfaces/task.type';
import { getActiveTab } from '@/utils/getActiveTab';

describe('Unit | Util | Get Active Tab', () => {
    test('returns proper value with proper input', () => {
        expect(getActiveTab()).toEqual(Tab.IN_PROGRESS);
        expect(getActiveTab('assigned')).toEqual(Tab.ASSIGNED);
        expect(getActiveTab('available')).toEqual(Tab.AVAILABLE);
        expect(getActiveTab('needs_review')).toEqual(Tab.NEEDS_REVIEW);
        expect(getActiveTab('in_review')).toEqual(Tab.IN_REVIEW);
        expect(getActiveTab('verified')).toEqual(Tab.VERIFIED);
        expect(getActiveTab('merged')).toEqual(Tab.MERGED);
        expect(getActiveTab('completed')).toEqual(Tab.COMPLETED);
        expect(getActiveTab('in_progress')).toEqual(Tab.IN_PROGRESS);
        expect(getActiveTab('someRandomSection')).toEqual(Tab.IN_PROGRESS);
    });
});