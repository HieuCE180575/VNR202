export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { queryPartyHistoryKnowledge } from '@/lib/ai-engine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Tin nhắn không hợp lệ' }, { status: 400 });
    }

    const baseResponse = queryPartyHistoryKnowledge(message);

    return NextResponse.json({
      answer: baseResponse.answer,
      citations: baseResponse.citations,
      suggestions: baseResponse.suggestions,
      provider: 'local-rag'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi xử lý câu hỏi', details: String(error) }, { status: 500 });
  }
}
